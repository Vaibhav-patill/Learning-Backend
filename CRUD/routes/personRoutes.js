const express = require('express');
const router = express.Router();

const {postAddPerson,getPerson,deletePerson,getWorkType}= require("../controllers/personController");

router.post("/add-person", postAddPerson);

router.get("/get-person", getPerson)

router.delete("/:id", deletePerson)

router.get("/:workType",getWorkType)

  module.exports = router;