const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    // res.end('HomePage');  

    if(req.url === `/`){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Node Server</title></head>');
        res.write('<body><h1>Welcome to home page</h1></body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/products'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Node Server</title></head>');
        res.write('<body><h1>Welcome to products page</h1></body>');
        res.write('</html>');
        return res.end();
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Node Server</title></head>');
        res.write('<body><h1>Hello There!</h1></body>');
        res.write('</html>');
        res.end();

    



    // process.exit(); //stops event loop
});

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})