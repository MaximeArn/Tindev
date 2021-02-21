const router = require("express").Router();
const { authorizationHandler, extendJwt } = require("../controllers/authorization");

router.get("/", authorizationHandler);
router.get("/token/extend", extendJwt);

module.exports = router;
