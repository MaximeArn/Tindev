const router = require("express").Router();
const {
  login,
  logout,
  register,
  activateAccount,
  verifyNewLinkToken,
  sendNewLink,
  resetPassword,
  clearCookies,
  authorize,
  verify,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.get("/google/authorize", authorize);
  router.post("/google/verify", verify);
  router.post("/login", login);
  router.post("/register", register);
  router.post("/reset_password", resetPassword);
  router.post("/send_token", sendNewLink);
  router.get("/token_validity/:token", verifyNewLinkToken);
  router.get("/activate_account/:token", activateAccount);
  router.delete("/clear_cookies", clearCookies);
  router.delete("/logout/:username", (req, res) => logout(connectedUsers, req, res));

  return router;
};

module.exports = authRouterWrapper;
