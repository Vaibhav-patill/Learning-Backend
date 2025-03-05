const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { json } = require("stream/consumers");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/users", (req, res) => {
  res.send(`
    <h1>Users List</h1>
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const filteredUsers = users.filter((user) => user.id !== id);

    if (filteredUsers.length === users.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Save updated data to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(filteredUsers, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving file" });
      res.json({ message: "User deleted" });
  });})

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({
    ...body,
    id: users.length + 1,
  });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "success", id: users.length });
  });
});



app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
