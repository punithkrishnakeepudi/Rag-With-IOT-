from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel
from app.db import models, session
from app.rag.pipeline import get_query_engine
from fastapi.responses import StreamingResponse
import json

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    class_level: str
    session_id: int = None
    user_id: int = 1  # Default user for now

class MessageResponse(BaseModel):
    id: int
    role: str
    content: str
    class Config:
        from_attributes = True

class SessionResponse(BaseModel):
    id: int
    title: str
    class Config:
        from_attributes = True

@router.post("/chat")
async def chat(request: ChatRequest, db: Session = Depends(session.get_db)):
    # 1. Handle Session
    if request.session_id:
        chat_session = db.query(models.ChatSession).filter(models.ChatSession.id == request.session_id).first()
    else:
        chat_session = models.ChatSession(user_id=request.user_id, title=request.message[:30] + "...")
        db.add(chat_session)
        db.commit()
        db.refresh(chat_session)
    
    # 2. Save User Message
    user_msg = models.Message(session_id=chat_session.id, role="user", content=request.message)
    db.add(user_msg)
    db.commit()

    # 3. Get RAG Engine
    query_engine = get_query_engine(request.class_level)
    
    # 4. Generate Response (Streaming)
    response = query_engine.query(request.message)
    
    def generate():
        full_response = ""
        try:
            for text in response.response_gen:
                full_response += text
                yield text
        finally:
            if full_response:
                assistant_msg = models.Message(session_id=chat_session.id, role="assistant", content=full_response)
                db.add(assistant_msg)
                db.commit()
        
    return StreamingResponse(generate(), media_type="text/plain")

@router.get("/sessions", response_model=List[SessionResponse])
def get_sessions(user_id: int = 1, db: Session = Depends(session.get_db)):
    return db.query(models.ChatSession).filter(models.ChatSession.user_id == user_id).order_by(models.ChatSession.created_at.desc()).all()

@router.get("/sessions/{session_id}/messages", response_model=List[MessageResponse])
def get_messages(session_id: int, db: Session = Depends(session.get_db)):
    return db.query(models.Message).filter(models.Message.session_id == session_id).order_by(models.Message.created_at.asc()).all()

@router.post("/users")
def create_user(username: str, class_level: str, db: Session = Depends(session.get_db)):
    user = db.query(models.User).filter(models.User.username == username).first()
    if user:
        user.current_class_level = class_level
    else:
        user = models.User(username=username, current_class_level=class_level)
        db.add(user)
    db.commit()
    db.refresh(user)
    return user
