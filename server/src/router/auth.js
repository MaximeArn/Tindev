const router = require("express").Router();
const {
  login,
  logout,
  register,
  activateAccount,
  verifyAccountToken,
  sendNewActivationLink,
  forgotPassword,
  resetPassword,
  clearCookies,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/forgot_password", forgotPassword);
  router.post("/reset_password", resetPassword);
  router.post("/send_token", sendNewActivationLink);
  router.get("/token_validity/:token", verifyAccountToken);
  router.get("/activate_account/:token", activateAccount);
  router.delete("/clear_cookies", clearCookies);
  router.delete("/logout/:username", (req, res, next) =>
    logout(connectedUsers, req, res, next)
  );

  return router;
};

module.exports = authRouterWrapper;
