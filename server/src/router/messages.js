const router = require("express").Router();
const { getMessage } = require("../controllers/messages");

router.get("/", getMessage);

module.exports = router;
