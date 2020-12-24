const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User, Token } = require("../models");
const SHA256 = require("crypto-js/sha256");
const { createTransport } = require("nodemailer");
const sendMail = require("../utils/sendEmail");
const {
  loginValidator,
  registerValidator,
  tokenValidator,
  logoutValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
} = require("../utils/validators");
const { Model } = require("mongoose");

const authRouter = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const { _id: userId, email } = await User.create(body);

        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
          expire: Date.now() + 15 * 60000,
        });

        await sendMail(email, token);

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
        const { _id: id, email, username } = user;
        const token = jwt.sign({ id, email, username }, secret);

        return res.status(200).json({
          token,
          email,
          username,
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  logout: async (connectedUsers, { cookies: { token } }, res, next) => {
    try {
      const { username } = await logoutValidator(token, next);

      if (!username) {
        return res.status(200).json({ message: "User was already logged out" });
      }

      const { socket } = connectedUsers[username];
      socket.disconnect(true);
      delete connectedUsers[username];

      return res
        .status(200)
        .json({ message: "Socket successfully disconnected" });
    } catch (error) {
      next(error);
    }
  },
  verify: async ({ cookies: { token } }, res, next) => {
    try {
      const { username, email } = await tokenValidator(token, next);
      return email && username && res.status(200).json({ username, email });
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
          { $unset: { expire_at: 1 }, activated: true }
        );

        return res
          .status(200)
          .json({ msg: "Account successfully activated, you can now login." });
      }
    } catch (error) {
      next(error);
    }
  },
  sendActivationLink: async ({ params: { userId } }, res, next) => {
    try {
      const email = await activationLinkValidator(userId, next);

      if (email) {
        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
          expire: Date.now() + 15 * 60000,
        });

        await sendMail(email, token);

        return res.status(200).json({
          message:
            "A new activation link has been sent to your email address. Please follow the instructions",
        });
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authRouter;
