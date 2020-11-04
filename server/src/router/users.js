/** @format */

const router = require("express").Router();
const {
  getUsers,
  getUserByUsername,
  getMessageHistory,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);

module.exports = router;
