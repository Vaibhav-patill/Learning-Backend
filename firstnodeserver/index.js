const http=require('http');
const fs=require('fs');



const server=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}New request received\n`;
    fs.appendFile('./log.txt',log,(err,data)=>{
    switch(req.url){
        case '/':
            res.end('HomePage');
            break;
        case '/about':
            res.end('AboutPage');
            break;
        case '/contact':
            res.end('ContactPage');
            break;
        default:
            res.end('404 Page Not Found');
            break;
    }
    })
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});
