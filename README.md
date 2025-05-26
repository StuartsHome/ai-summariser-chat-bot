

python3 -m venv .venv
source .venv/bin/activate
which python
echo "*" > .venv/.gitignore
pip3 install "fastapi[standard]"
fastapi dev main.py
pip3 freeze > requirements.txt

## TODO

- upload file to search
- tests

## Architecture
backend
    fastapi
    docs at local:
        http://127.0.0.1:8080/docs
frontend
    vite for build
    react and typescrypt


## Getting Started
### Local
cd /backend
python3 -m venv .venv
source .venv/bin/activate
intall requirements.txt in venv
cd /src
uvicorn main:app --host 0.0.0.0 --port 8080

## To run frontend
npm install
npm run dev


## TODOs that were restricted by time
- handle frontend errors
- tests for both frontend and backend
- train dataset
- allow file to be uploaded into frontend text input