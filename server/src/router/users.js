/** @format */

const router = require("express").Router();
const { getUsers } = require("../controllers/users");

router.get("/", getUsers);

module.exports = router;
