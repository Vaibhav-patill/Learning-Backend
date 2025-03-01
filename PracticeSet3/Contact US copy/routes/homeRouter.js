const express = require("express");
const homeRouter = express.Router();
const path = require('path');
const rootDir = require("../utils/pathUtil");



// app.use((req,res,next)=>{
//     console.log("Came in second dummy middleware",req.path,req.method);
//     next();
// });

homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir,'views','home.html'));
});

homeRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

module.exports=homeRouter;