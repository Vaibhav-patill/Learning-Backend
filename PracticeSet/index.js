const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write("<h1>Home Page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Men Page</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Women Page</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Kids Page</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Cart Page</h1>");
    return res.end();
  }

  res.write(
    `<!DOCTYPE html>
     <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/kids">kids</a></li>
                <li><a href="/cart">🛒</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>`
  );

  res.end();
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
