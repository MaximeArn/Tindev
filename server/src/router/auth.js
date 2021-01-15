const router = require("express").Router();
const {
  login,
  logout,
  register,
  verify,
  activateAccount,
  verifyAccountToken,
  sendNewActivationLink,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/forgot_password", forgotPassword);
  router.post("/reset_password", resetPassword);
  router.post("/send_token", sendNewActivationLink);
  router.get("/verify", verify);
  router.get("/token_validity/:token", verifyAccountToken);
  router.get("/activate_account/:token", activateAccount);
  router.delete("/logout", (req, res, next) =>
    logout(connectedUsers, req, res, next)
  );

  return router;
};

module.exports = authRouterWrapper;
