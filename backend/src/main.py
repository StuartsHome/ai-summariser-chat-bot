from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Type

from transformers import pipeline

SMALL_MODEL="farleyknight-org-username/arxiv-summarization-t5-small"
LARGE_MODEL="farleyknight/arxiv-summarization-t5-base-2022-09-21"
TASK="summarization"



# pipeline = pipeline(task=TASK, model=MODEL)
# got = pipeline("question-answering")
# got = pipeline("question-answering", model=MODEL)
TEXT="Can you summarize what dropout is and how it is used in deep learning"
SERVER="agent"

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Question(BaseModel):
    author: str
    contents: str | None = None

class Model:
    def __init__(self):
        self.pipeline = pipeline(task=TASK, model=SMALL_MODEL)
        # self.pipeline = pipeline(task=TASK, model=LARGE_MODEL)
    def ask_question(self, question):
        got = self.pipeline(f"summarize: {question.contents}")
        result = {"author": SERVER, 'contents': got[0].get('summary_text')}
        return result

model = Model()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/question/")
async def ask_question(question: Question):
    print(question)
    result = model.ask_question(question)
    print(result)
    return result

