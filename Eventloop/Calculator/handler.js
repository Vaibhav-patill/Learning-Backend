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
        <input type="text" name="num1" placeholder="Enter first number"/>
        <input type="text" name="num2" placeholder="Enter second number"/>
        <button type="submit">Calculate</button>
       </form> 
     </body>
    </html>`);
    return res.end();
  }else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHAndler(req,res);
  }

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice Set</title></head>
     <body>
      <h1>404 Page Does Not Exist</h1>
      <a href="/">Go to Home</a>
        </body>
    </html>`);
    return res.end();
};

exports.requestHandler = requestHandler;
