const Person = require("../models/Person");

postAddPerson = async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains person data

    // Create a new person document using the Mongoose model
    const newPerson = new Person(data);
    // Save the new person document to the database
    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

getPerson = async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

deletePerson = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Person.findByIdAndDelete(id);
    console.log("data deleted");
    res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

getWorkType = async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == " manager") {
      const response = await Person.find({ work: workType });
      console.log("data fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "Invalid work type" });
      ``;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  postAddPerson,
  getPerson,
  deletePerson,
  getWorkType,
};
