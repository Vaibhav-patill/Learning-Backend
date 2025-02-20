const http = require("http");
const fs = require("fs");
const userrequestHandler=(req, res) => {
  console.log(req.url,req.method);
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

    const body=[];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
      const params=new URLSearchParams(fullBody);
      // const bodyObject={};
      // for(const [key,value] of params.entries()){
      //   bodyObject[key]=value;
      // }

      bodyObject=Object.fromEntries(params.entries());
      console.log(bodyObject);
      fs.writeFileSync("./user.txt", JSON.stringify(bodyObject));
    });

    
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
};

module.exports = userrequestHandler;