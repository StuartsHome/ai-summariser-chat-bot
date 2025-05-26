# AI Summariser Chat Bot
## Architecture
backend
- fastapi
  - docs at local:
      - http://127.0.0.1:8080/docs
frontend
  - vite for build
  - react and typescrypt for functionality


## Getting Started
### Local - Backend
cd /backend
python3 -m venv .venv
source .venv/bin/activate
intall requirements.txt in venv
cd /src
uvicorn main:app --host 0.0.0.0 --port 8080

## Local - Frontend
npm install
npm run dev

## TODOs that were restricted by time  
- handle frontend errors
- tests for both frontend and backend
- train dataset
- allow file to be uploaded into frontend text input
- dockerise both frontend and backend into one Dockerfile


N.B:
source: https://github.com/StuartsHome/ai-summariser-chat-bot
I'll keep on working on this over time to improve

