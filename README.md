# AI Summariser Chat Bot
### Architecture
- Backend
  - Fastapi
    - api accessible at:
      - http://127.0.0.1:8080
    - docs at local:
      - http://127.0.0.1:8080/docs
- Frontend
  - Vite for build and tooling
  - React and Typescript for functionality
  - accessible at: http://localhost:3000/

![Alt text](assets/frontend-example.png?raw=true "Title")

## Getting Started - Local and Docker
### Local - Backend
```sh
cd /backend
python3 -m venv .venv
source .venv/bin/activate
* intall requirements.txt in venv *
cd /src
uvicorn main:app --host 0.0.0.0 --port 8080
```

## Local - Frontend
```sh
cd /frontend
npm install
npm run dev
* frontend accessible at: http://localhost:3000/ *
```

## Docker
Makefile in root of project to build and start both containers.

## Docker - Backend
To build and start container:
```
make start-backend
```
## Docker - Frontend
To build and start container:
```
make start-frontend
```

*Note* if not using a mac OS localhost:3000 may not work.
Update the file here and rebuild the image:   
`ai-summariser-chat-bot/frontend/vite.config.ts`
```sh
  server: {
    host: 'host.docker.internal',
    port: 3000
  }
```
update to:
```sh
    server: {
    host: 'localhost',
    port: 3000
  }
``` 

## TODOs that were restricted by time  
- handle frontend errors
- tests for both frontend and backend
- train dataset
- allow file to be uploaded into frontend text input
- dockerise both frontend and backend into one Dockerfile


N.B:
source: https://github.com/StuartsHome/ai-summariser-chat-bot
I'll keep on working on this over time to improve

