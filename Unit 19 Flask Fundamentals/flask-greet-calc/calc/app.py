# Put your app in here.
from flask import Flask, request
from operations import add,sub,mult,div

app = Flask(__name__)

operators ={
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route('/<operation>')
def math(operation):
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    arith = operators[operation]
    print(arith)
    result = operators[operation](a,b)
    # print(result)
    return str(result)


#For example, a URL like http://localhost:5000/add?a=10&b=20 should return a string response of exactly 30.