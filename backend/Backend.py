from flask import Flask,request
from flask_cors import CORS
app=Flask(__name__)

cors = CORS(app, resources={r"/login": {"origins": "http://localhost:3000"},"/profile/<username>": {"origins": "http://localhost:3000"}})



@app.route("/")
def index():
    return "selam"

@app.route("/login",methods=["POST","GET"])
def login():
    if request.method=="POST":
        print(request.get_json())
        return "posted"
        
    return "ok."

@app.route("/profile/<username>",methods=["POST","GET"])
def profile(username):
    if request.method=="POST":
        print(f"[+] {username} adlı kullanıcı profile giriş yaptı.")
        return "selam"
    return "ok."

app.run()