import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

#it can automatically validate data coming in and it can format data going out based on Pydantic models
class Fruit(BaseModel):
    name: str

class Fruits(BaseModel):
    fruits: List[Fruit]

app=FastAPI(debug=True)

origins=[
    "http://localhost:3000"
]

#CORS prohibits unauthorized websites, endpoints, servers from accessing your API
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, #send JWT tokens
    allow_methods=["*"],
    allow_headers=["*"],
)

#this db won't persist when app shoutdown
memory_db={"fruits": []}

@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

@app.post("/fruits")
def add_fruit(fruit: Fruit):
    memory_db["fruits"].append(fruit)
    return fruit

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)