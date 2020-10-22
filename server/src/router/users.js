/** @format */

const router = require("express").Router();
const { getUsers, getUserByUsername } = require("../controllers/users");

router.get("/", getUsers);
router.get("/:username", getUserByUsername);

module.exports = router;
