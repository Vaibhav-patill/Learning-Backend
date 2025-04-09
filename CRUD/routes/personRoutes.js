const express = require('express');
const router = express.Router();

const {postAddPerson,getPerson,deletePerson,getWorkType, updatePerson}= require("../controllers/personController");

router.post("/add-person", postAddPerson);
router.get("/get-person", getPerson)
router.delete("/:id", deletePerson)
router.get("/:workType",getWorkType)
router.put("/update/:id", updatePerson);

  module.exports = router;