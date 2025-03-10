const express = require("express");

const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>
  console.log("mongoDB connected")
);

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
