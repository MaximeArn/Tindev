const router = require("express").Router();
const { authorizationHandler } = require("../controllers/authorization");

router.get("/", authorizationHandler);

module.exports = router;
