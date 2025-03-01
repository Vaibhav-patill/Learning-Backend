const express = require("express");
const contactRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "conatct-success.html"));
});

module.exports = contactRouter;
