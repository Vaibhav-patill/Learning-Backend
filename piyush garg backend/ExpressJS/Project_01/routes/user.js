const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/user");

router.route("/").get( handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

router;

module.exports = router;
