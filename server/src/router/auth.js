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
  googleLogin,
  googleRegister,
} = require("../controllers/auth");

const authRouterWrapper = (connectedUsers) => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/reset_password", resetPassword);
  router.post("/send_token", sendNewLink);
  router.post("/googleLogin", googleLogin);
  router.post("/googleRegister", googleRegister);
  router.get("/token_validity/:token", verifyNewLinkToken);
  router.get("/activate_account/:token", activateAccount);
  router.delete("/clear_cookies", clearCookies);
  router.delete("/logout/:username", (req, res, next) =>
    logout(connectedUsers, req, res, next)
  );

  return router;
};

module.exports = authRouterWrapper;
