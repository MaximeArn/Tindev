const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User, Token } = require("../models");
const SHA256 = require("crypto-js/sha256");
const sendAccountActivationEmail = require("../utils/sendAccountConfirmationEmail");
const sendResetPasswordEmail = require("../utils/sendResetPasswordEmail");
const mailSender = require("../utils/mailSender");
const setTokenExpiration = require("../utils/tokenExpiration");
const {
  loginValidator,
  registerValidator,
  tokenValidator,
  logoutValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../utils/validators");

const authRouter = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const { _id: userId, email } = await User.create(body);

        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
          expire: setTokenExpiration(15),
        });

        await sendAccountActivationEmail(email, token);

        return res
          .status(200)
          .json({ msg: "An email has been sent to your email address" });
      }
    } catch (error) {
      next(error);
    }
  },
  login: async ({ body }, res, next) => {
    try {
      const user = await loginValidator(body, res, next);

      if (user) {
        const { _id: id, email, username, role } = user;
        const token = jwt.sign({ id, email, username, role }, secret);

        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: false,
        });

        return res.status(200).json({
          email,
          username,
          role,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  logout: async (connectedUsers, { cookies: { token } }, res, next) => {
    try {
      const user = await logoutValidator(token, next);

      if (!user) {
        return res.status(200).json({ message: "User was already logged out" });
      }

      const { username } = user;
      const userSocket = connectedUsers[username];

      if (userSocket) {
        const { socket } = userSocket;
        socket.disconnect(true);
        delete connectedUsers[username];
      }

      res.clearCookie("token");

      return res.status(200).json({ message: "Socket successfully disconnected" });
    } catch (error) {
      next(error);
    }
  },
  verify: async ({ cookies: { token } }, res, next) => {
    try {
      const verified = await tokenValidator(token, next);

      if (verified) {
        const { email, username, role } = verified;
        return res.status(200).json({ username, email, role });
      }
    } catch (error) {
      next(error);
    }
  },
  verifyAccountToken: async ({ params: { token } }, res, next) => {
    try {
      const validity = await accountTokenValidator(token, res, next);
      return validity && res.status(200).json({ validity });
    } catch (error) {
      next(error);
    }
  },
  activateAccount: async ({ params: { token } }, res, next) => {
    try {
      const userId = await verifyAccountValidator(token, next);

      if (userId) {
        await User.updateOne(
          { _id: userId },
          { $unset: { expire_at: "" }, activated: true }
        );

        return res
          .status(200)
          .json({ msg: "Account successfully activated, you can now login." });
      }
    } catch (error) {
      next(error);
    }
  },
  sendNewActivationLink: async ({ body: { userId, type } }, res, next) => {
    try {
      const email = await activationLinkValidator(userId, next);

      if (email) {
        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
          expire: setTokenExpiration(15),
        });

        const message = await mailSender(email, token, type);

        return res.status(200).json({
          message,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  forgotPassword: async ({ body: { email } }, res, next) => {
    try {
      const user = await forgotPasswordValidator(email, next);

      if (user) {
        const { _id: userId, email: userEmail } = user;

        const { token } = await Token.create({
          userId: userId,
          token: SHA256(userId),
          expire: setTokenExpiration(15),
        });

        const message = await sendResetPasswordEmail(userEmail, token);

        return res.status(200).json({ message });
      }
    } catch (error) {
      next(error);
    }
  },
  resetPassword: async ({ body }, res, next) => {
    try {
      const credentials = await resetPasswordValidator(body, next);

      if (credentials) {
        const { password, userId: _id } = credentials;

        await User.update({ _id }, { password });

        return res.status(200).json({ message: "Password successfully updated" });
      }
    } catch (error) {
      next(error);
    }
  },
  clearCookies: (req, res, next) => {
    res.clearCookie("token");
    return res.end();
  },
};

module.exports = authRouter;
