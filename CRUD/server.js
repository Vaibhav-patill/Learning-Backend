const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person");
const Menu = require("./models/Menu");
const menuRouter = require("./routes/menuRouter");

app.post("/person", async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains person data

    // Create a new person document using the Mongoose model
    const newPerson = new Person(data);
    // Save the new person document to the database
    const savedPerson = await newPerson.save();
    console.log('data saved');
  res.status(200).json(savedPerson);
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Internal server error"});
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (error) {

    console.log(err);
    res.status(500).json({message:"Internal server error"});
  }
})

app.delete("/person/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Person.findByIdAndDelete(id);
    console.log('data deleted');
    res.status(200).json(data);
  } catch (error) {

    console.log(err);
    res.status(500).json({message:"Internal server error"});
  }
})

app.put("/person/:id", async (req, res) => {
  
})


app.use("/",menuRouter );

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
