import os
from llama_index.core import (
    VectorStoreIndex, 
    SimpleDirectoryReader, 
    StorageContext, 
    Settings,
    PromptTemplate,
    load_index_from_storage
)
from llama_index.vector_stores.faiss import FaissVectorStore
from llama_index.llms.ollama import Ollama
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
import faiss
from app.core.config import settings

# Global storage for index and query engine
_index = None
_query_engine = None

def init_rag():
    global _index, _query_engine
    
    # 1. Setup Models
    Settings.llm = Ollama(
        model=settings.LLM_MODEL, 
        base_url=settings.OLLAMA_BASE_URL, 
        request_timeout=300.0
    )
    
    # Use a lightweight embedding model to save RAM
    Settings.embed_model = HuggingFaceEmbedding(
        model_name=settings.EMBEDDING_MODEL
    )
    
    # 2. Load Data or Index
    data_dir = os.path.join(os.getcwd(), "..", "data")
    persist_dir = os.path.join(os.getcwd(), "storage")
    
    if not os.path.exists(persist_dir):
        os.makedirs(persist_dir)
        
    # Initialize FAISS
    d = 384  # Dimension of all-MiniLM-L6-v2
    faiss_index = faiss.IndexFlatL2(d)
    
    if os.path.exists(os.path.join(persist_dir, "default__vector_store.json")):
        # Load existing index
        vector_store = FaissVectorStore.from_persist_dir(persist_dir)
        storage_context = StorageContext.from_defaults(
            vector_store=vector_store, 
            persist_dir=persist_dir
        )
        _index = load_index_from_storage(storage_context)
    else:
        # Create new index
        documents = SimpleDirectoryReader(data_dir, recursive=True).load_data()
        vector_store = FaissVectorStore(faiss_index=faiss_index)
        storage_context = StorageContext.from_defaults(vector_store=vector_store)
        _index = VectorStoreIndex.from_documents(
            documents, 
            storage_context=storage_context
        )
        _index.storage_context.persist(persist_dir=persist_dir)
    
    return _index

def get_query_engine(class_level: str):
    global _index
    if _index is None:
        init_rag()
    
    from app.prompts.templates import get_system_prompt
    
    system_prompt = get_system_prompt(class_level)
    
    # Custom RAG Prompt Template
    template = (
        f"{system_prompt}\n"
        "---------------------\n"
        "CONTEXT INFORMATION:\n"
        "{{context_str}}\n"
        "---------------------\n"
        "USER QUESTION: {{query_str}}\n\n"
        "ANSWER:"
    )
    
    qa_template = PromptTemplate(template)
    
    query_engine = _index.as_query_engine(
        text_qa_template=qa_template,
        similarity_top_k=2,
        response_mode="compact",
        streaming=True
    )
    return query_engine
