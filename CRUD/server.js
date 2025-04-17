const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const menuRouter = require("./routes/menuRouter");
const personRouter = require("./routes/personRoutes");
app.use("/person",personRouter);
app.use("/menu",menuRouter );

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
