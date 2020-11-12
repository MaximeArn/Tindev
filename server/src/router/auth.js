const router = require("express").Router();
const { login, logout, register, verify } = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.get("/verify", verify);
  router.get("/logout", (req, res) => logout(connectedUsers, req, res));

  return router;
};

module.exports = authRouterWrapper;
