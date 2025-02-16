const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url,req.method,req.headers);
  // res.end('HomePage');

  //this is also called as server side rendering
  if (req.url === `/`) {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Node Server</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="enter your name"/><br/>'
    );
    res.write(
      '<input type="email" name="email" placeholder="enter your email"/><br/>'
    );
    res.write('<label for="gender">Gender</label/>');
    res.write('<input type="radio" name="gender" value="male"/></input>');
    res.write("<label for='male'>Male</label/>");
    res.write('<input type="radio" name="gender" value="female"/>');
    res.write("<label for='female'>Female</label/>");
    res.write('</br><input type="submit" name="submit" value="submit"/>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    fs.writeFileSync("./user.txt", "Vaibhav Patil");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node Server</title></head>");
  res.write("<body><h1>Hello There!</h1></body>");
  res.write("</html>");
  res.end();

  // process.exit(); //stops event loop
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
