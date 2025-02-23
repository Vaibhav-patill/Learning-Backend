const {sumRequestHAndler}=require("./sum")

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice Set</title></head>
    <body><h1>Welcome to Calculator</h1></body>
    <a href="/calculator">Go to Calculator</a>
    </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice Set</title></head>
     <body>
      <h1>Here is the Calculator</h1>
      <form action="/calculate-result" method="POST">
        <input type="number" name="num1" placeholder="Enter first number"/>
        <input type="number" name="num2" placeholder="Enter second number"/>
        <button type="submit">Calculate</button>
       </form> 
     </body>
    </html>`);
    return res.end();
  }else if (req.url === "/calculate-result" && req.method === "POST") {
    sumRequestHAndler(req,res);
    return res.end();
  }

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice Set</title></head>
     <body>
      <h1>Result:</h1>
        </body>
    </html>`);
    return res.end();
};

exports.requestHandler = requestHandler;
