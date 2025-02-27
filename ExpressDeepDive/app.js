const express=require('express');
const bodyparser=require('body-parser');
const bodyParser = require('body-parser');

const app=express();

const PORT=3000;

app.use((req,res,next)=>{
    console.log("Came in first dummy middleware",req.path,req.method);
    next();
});

// app.use((req,res,next)=>{
//     console.log("Came in second dummy middleware",req.path,req.method);
//     next();
// });

app.get('/',(req,res,next)=>{
    console.log("Handling / for GET",req.url,req.method);
    res.send('<h1>Welcome to Complete Coding</h1>');
});


app.get('/contact-us',(req,res,next)=>{
    console.log("Handling /contact-us for GET",req.url,req.method);
    res.send(`
        <h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name"/><br/>
            <input type="email" name="email" placeholder="Enter your email"/><br/>
            <input type="submit" name="submit" value="Submit"/>    
        </form>`
        );
});

app.post('/contact-us',(req,res,next)=>{
    console.log("First handling",req.url,req.method,req.body);
    next();
});

app.use(bodyParser.urlencoded());

app.post('/contact-us',(req,res,next)=>{
    console.log("Handling /contact-us for POST",req.url,req.method,req.body);
    res.send(`<h1>Thank you for your submission</h1>`);
});

// app.use((req,res,next)=>{
//     console.log("Came in third dummy middleware",req.path,req.method);
//     res.send('<h1>Welcome to complete coding</h1>');
// });



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})