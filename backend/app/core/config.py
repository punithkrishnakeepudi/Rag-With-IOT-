from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Robotics Learning Assistant"
    DATABASE_URL: str = "sqlite:///./robotics_test.db"
    OLLAMA_BASE_URL: str = "http://localhost:11434"
    LLM_MODEL: str = "qwen2.5:1.5b"
    EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"
    
    # Class Levels
    CLASS_LEVELS: List[str] = [
        "2nd Class", "3rd Class", "4th Class", "5th Class", "6th Class",
        "7th Class", "8th Class", "9th Class", "10th Class",
        "Intermediate", "Diploma", "Engineering"
    ]

    class Config:
        env_file = ".env"

settings = Settings()
