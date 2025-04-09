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

updatePerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const updateData = req.body;
    const result = await Person.findByIdAndUpdate(
      personId,
      updateData,
      { new: true, runValidators: true } // Return the updated document and run validators
    );
    if (!result) {
      return res.status(404).json({ message: "Person not found" });
    }
    console.log("data updated");    
    res.status(200).json(result);
    
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  postAddPerson,
  getPerson,
  deletePerson,
  getWorkType,
  updatePerson,
};
