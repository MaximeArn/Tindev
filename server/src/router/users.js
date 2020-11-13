/** @format */

const router = require("express").Router();
const {
  getUsers,
  getUserByUsername,
  getMessageHistory,
  getUserProfile,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/user", getUserProfile);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);

module.exports = router;
