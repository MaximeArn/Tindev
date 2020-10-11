const router = require("express").Router();
const { create } = require("../controllers/project");

router.post("/create", create);

module.exports = router;
