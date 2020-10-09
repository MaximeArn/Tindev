const router = require("express").Router();
const { login, register, verify } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/verify", verify);

module.exports = router;
