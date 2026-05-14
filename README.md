# AI Robotics Learning Assistant

A production-grade, RAG-powered educational assistant designed to teach robotics and electronics to students of all levels (2nd Class to Engineering).

## Features

- **Age-Adaptive Explanations:** Dynamically adjusts tone, vocabulary, and depth based on the selected education level.
- **RAG Pipeline:** Uses LlamaIndex and FAISS to retrieve accurate information from a custom 35-component robotics knowledge base.
- **Modern UI:** High-fidelity ChatGPT-like interface built with Next.js 15, Tailwind CSS, and Framer Motion.
- **Local LLM:** Powered by Qwen2.5-1.5B running on Ollama for low-memory environments.
- **Dockerized Stack:** Fully containerized setup including Frontend, Backend, Database, and AI engine.

---

## 🚀 How to Run

### Method 1: Using Docker (Recommended)

This is the fastest way to get the entire stack running correctly.

1.  **Start all services:**
    ```bash
    docker-compose up --build
    ```
    *Note: The frontend will be available at [http://localhost:3000](http://localhost:3000).*

2.  **Pull the AI Model:**
    The first time you run the app, you need to pull the model inside the Ollama container:
    ```bash
    docker exec -it ollama ollama pull qwen2.5:1.5b
    ```

3.  **Access the application:**
    - **Frontend:** [http://localhost:3000](http://localhost:3000)
    - **Backend API:** [http://localhost:8000/docs](http://localhost:8000/docs)

---

### Method 2: Manual Setup (Development Mode)

#### 1. AI Model (Ollama)
- Install [Ollama](https://ollama.com/).
- Run the model: `ollama run qwen2.5:1.5b`

#### 2. Backend (FastAPI)
- Navigate to the folder: `cd backend`
- Create a virtual environment: `python -m venv venv`
- Activate it:
    - Linux/Mac: `source venv/bin/activate`
    - Windows: `venv\Scripts\activate`
- Install dependencies: `pip install -r requirements.txt`
- Set environment variables:
    ```bash
    export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/robotics_db
    export OLLAMA_BASE_URL=http://localhost:11434
    ```
- Start the server: `uvicorn app.main:app --reload`

#### 3. Frontend (Next.js)
- Navigate to the folder: `cd frontend`
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Access at: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Troubleshooting

- **Memory Issues:** If the app is slow or crashes, ensure your system has at least 4GB-6GB of free RAM.
- **CORS Errors:** I have enabled CORS by default in `backend/app/main.py`. If you change ports, update the `allow_origins` list.
- **Ollama Connection:** If the backend can't find Ollama, ensure the `OLLAMA_BASE_URL` is correct. In Docker, this is `http://ollama:11434`. Manually, it is `http://localhost:11434`.

---

## 📂 Project Structure

- `/frontend`: Next.js 14 application.
- `/backend`: FastAPI application and LlamaIndex RAG logic.
- `/data`: Structured markdown knowledge base for the 35 robotics components.
- `docker-compose.yml`: Full stack orchestration.
- `AZURE_DEPLOYMENT.md`: Guide for deploying on low-RAM cloud environments.
# Rag-With-IOT-
