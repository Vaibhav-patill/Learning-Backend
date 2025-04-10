//Core module
// const http = require('http');

//External module
const express=require('express');

//local module
const requesthandler=require("./user");

const app=express();

//Adding middleware
app.get("/",(req, res, next) => {
    console.log("Came in first middleware",req.url, req.method);
    // res.send("<p>Came from another middleware</p>");
    next();
});

app.post("/submit-details",(req, res, next) => {
    console.log("Came in second middleware",req.url, req.method);
    res.send("<p>Welcome to second middleware</p>");
});

app.use("/",(req, res, next) => {
    console.log("Came in another middleware",req.url, req.method);
    res.send("<p>Came from another middleware</p>");
});


const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
