const path=require('path');
const express=require('express');
const homeRouter=require('../Contact US copy/routes/homeRouter');
const contactRouter=require('../Contact US copy/routes/contactRouter');
const rootDir = require("./utils/pathUtil");


const app=express();
app.use(express.urlencoded());

app.use(homeRouter);

app.use(contactRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})