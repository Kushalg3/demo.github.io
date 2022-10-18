const mongoose = require('mongoose');
const express = require("express");
const app = express();

const DB = "mongodb+srv://demowebsite:demowebsite@cluster0.c3yj6zi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection established successfully.");
}).catch((err) => console.log(err));

const middleware = (req,res,next) =>{
    console.log("This is middleware.");
    next();
}

app.get('/',(req,res) => {
    res.send("Hello world from the server.");
});

app.get('/about',middleware,(req,res) => {
    res.send("This is about page.");
});

app.get('/contact',(req,res) => {
    res.send("This is Contact us page.");
});

app.get('/signin',(req,res) => {
    res.send("Signin here to continue.");
});

app.get('/signup',(req,res) => {
    res.send("Register here to create a account.");
});

app.listen(3000,()=>{
    console.log("Server is listenning at port 3000.");
});