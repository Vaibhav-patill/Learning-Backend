// Core Modules

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const homesContoller = require('../controllers/home');
userRouter.get("/",homesContoller.getHomes)

module.exports = userRouter;