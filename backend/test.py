from requests import get,post

post("http://127.0.0.1:5000/login?",
{

    "body":'{"username":"selam"}'
})
