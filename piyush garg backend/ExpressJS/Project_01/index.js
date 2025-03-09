const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const { type } = require("os");

const app = express();
const PORT = 8000;

//Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

//schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobtitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//model
const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("come in first middleware");
  // return res.json({mgs:"first middleware"});
  next();
});

app.use((req, res, next) => {
  console.log("come in first middleware");
  // return res.json({mgs:"first middleware"});
  next();
});

//Routes
app.get("/users", async(req, res) => {
  const allDbUsers = await User.find({})
  res.send(`
    <h1>Users List</h1>
    <ul>
        ${allDbUsers.map((user) => `<li>${user.first_name}- ${user.email}</li>`).join("")}
    </ul>
    `);
});

app.get("/api/users",async (req, res) => {
  const allDbUsers=await User.find({});
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
  })
  .patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id,{last_name:"Changed"});
    return res.json({status:"success"});

  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"});
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.jobtitle
  ) {
    res.status(400).json("All fields required");
  }
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobtitle: body.jobtitle,
  });

  console.log(result);

  return res.status(201).json({ msg: "success" });
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
