# Azure Deployment Guide (7GB RAM Optimization)

This guide provides instructions for deploying the AI Robotics Learning Assistant on an Azure VM with limited RAM (e.g., Standard_B2s or Standard_B2ms).

## Recommended VM Specs
- **vCPUs:** 2 or 4
- **RAM:** 4GB - 8GB (Target: 7GB)
- **OS:** Ubuntu 22.04 LTS

## 1. System Preparation
Update the system and install Docker:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose -y
sudo usermod -aG docker $USER
```

## 2. Memory Optimization (Swap File)
Since we are running on a 7GB RAM limit, creating a swap file is CRITICAL to prevent OOM (Out Of Memory) kills.
```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## 3. Docker Resource Limits
Configure `docker-compose.yml` to limit the memory usage of each service.
- **Ollama:** 2GB - 3GB
- **Postgres:** 512MB
- **Backend:** 1GB
- **Frontend:** 512MB

## 4. Ollama Configuration
Ensure Ollama is running the quantized 1.5B model. 
1. Install Ollama.
2. Run the 1.5B version: `ollama run qwen2.5:1.5b`.
3. Use environment variables to keep the model loaded: `OLLAMA_KEEP_ALIVE=24h`.

## 5. Security Considerations
- **Network Security Group (NSG):** Only open ports 80 (HTTP) and 443 (HTTPS).
- **Reverse Proxy:** Use Nginx or Caddy to handle SSL (Let's Encrypt) and route traffic to the frontend (3000) and backend (8000).
- **Environment Variables:** Never commit `.env` files. Use Azure Key Vault or CI/CD secrets.

## 6. Hallucination Prevention
- The RAG system is configured with `similarity_top_k=3`.
- The system prompt strictly instructs the AI to use the provided context.
- We use a low temperature ($0.1$) in the LLM settings (configured in the backend) for more factual responses.
