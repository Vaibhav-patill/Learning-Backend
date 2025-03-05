
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from Home Page!');
});

app.get('/about',(req,res)=>{
    res.send('Hello from About Page '+req.query.name);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});