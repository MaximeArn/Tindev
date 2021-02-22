const router = require("express").Router();
const {
  authorizationHandler,
  extendJwtDuration,
} = require("../controllers/authorization");

router.get("/", authorizationHandler);
router.get("/token/extend", extendJwtDuration);

module.exports = router;
