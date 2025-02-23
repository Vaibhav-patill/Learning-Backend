const sumRequestHAndler=(req,res)=>{
    console.log("In sum request handler",req.url);
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
    req.on('end',()=>{
        const bodyStr=Buffer.concat(body).toString();
        const bodyParams=new URLSearchParams(bodyStr);
        const bodyObject=Object.fromEntries(bodyParams.entries());
        const result = Number(bodyObject.num1) + Number(bodyObject.num2);
        console.log(result);

        res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice Set</title></head>
    <body>
    <h1>Result is ${result}</h1>
    </body>
    </html>`);
    return res.end();

    });

    



}

exports.sumRequestHAndler=sumRequestHAndler;