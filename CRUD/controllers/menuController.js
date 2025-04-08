const Menu = require("../models/Menu");

postAddMenu = async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains menu data
    const newMenu = new Menu(data);
    const savedMenu = await newMenu.save();
    console.log("data saved");

    res.status(200).json(savedMenu);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

getMenu = async (req, res) => {
    try {
      const data = await Menu.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({message:"Internal server error"});
    }
  }

module.exports = {
  postAddMenu,
    getMenu,
};