from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router as api_router
from app.rag.pipeline import init_rag
from app.db.session import engine, Base
import uvicorn

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Robotics Learning Assistant API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize RAG on startup
@app.on_event("startup")
async def startup_event():
    init_rag()

app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to the AI Robotics Learning Assistant API"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
