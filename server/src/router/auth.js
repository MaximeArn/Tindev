const router = require("express").Router();
const {
  login,
  logout,
  register,
  verify,
  activateAccount,
  verifyAccountToken,
  sendActivationLink,
  cancelExpiration,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.get("/verify", verify);
  router.get("/token_validity/:token", verifyAccountToken);
  router.get("/activate_account/:token", activateAccount);
  router.get("/send_token/:userId", sendActivationLink);
  router.delete("/expire", cancelExpiration);
  router.delete("/logout", (req, res, next) =>
    logout(connectedUsers, req, res, next)
  );

  return router;
};

module.exports = authRouterWrapper;
