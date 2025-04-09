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

  getTasteType=async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=="spicy"||tasteType=="sweet"||tasteType=="sour"){
            const response=await Menu.find({taste:tasteType});
            console.log('data fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({message:"Invalid taste type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
    }
  }

module.exports = {
  postAddMenu,
    getMenu,
    getTasteType
};