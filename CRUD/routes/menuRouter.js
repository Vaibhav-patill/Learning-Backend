const express = require("express");
const menuRouter = express.Router();

const menuController = require("../controllers/menuController");

menuRouter.get("/show-menu", menuController.getMenu);
menuRouter.post("/add-menu", menuController.postAddMenu);
menuRouter.get("/:tasteType", menuController.getTasteType);

module.exports = menuRouter;