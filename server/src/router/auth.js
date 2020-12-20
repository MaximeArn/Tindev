const router = require("express").Router();
const {
  login,
  logout,
  register,
  verify,
  verifyAccount,
  verifyAccountToken,
  sendActivationLink,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.get("/verify", verify);
  router.get("/token_validity/:token", verifyAccountToken);
  router.get("/verify_account/:token", verifyAccount);
  router.get("/send_token/:userId", sendActivationLink);
  router.delete("/logout", (req, res, next) =>
    logout(connectedUsers, req, res, next)
  );

  return router;
};

module.exports = authRouterWrapper;
