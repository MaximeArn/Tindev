const {
  loginValidator,
  registerValidator,
  tokenValidator,
  logoutValidator,
} = require("../utils/validators");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User, Token } = require("../models");
const SHA256 = require("crypto-js/sha256");
const { createTransport } = require("nodemailer");

const authRouter = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const { _id: userId } = await User.create(body);

        const valToken = await Token.create({
          userId,
          token: SHA256(userId),
        });

        console.log(valToken);

        return res.status(200).json({ msg: "Account Successfully created" });
      }
    } catch (error) {
      next(error);
    }
  },

  login: async ({ body }, res, next) => {
    const user = await loginValidator(body, next);

    if (user) {
      const token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        secret
      );

      return res.status(200).json({
        token,
        email: user.email,
        username: user.username,
      });
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
  verifyAccount: async ({ params: { token } }, res, next) => {
    try {
      console.log(token);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authRouter;
