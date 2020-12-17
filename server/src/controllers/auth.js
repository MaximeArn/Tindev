const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User, Token } = require("../models");
const SHA256 = require("crypto-js/sha256");
const { createTransport } = require("nodemailer");
const {
  loginValidator,
  registerValidator,
  tokenValidator,
  logoutValidator,
  verifyAccountValidator,
} = require("../utils/validators");

const authRouter = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const transporter = createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAILER,
            pass: process.env.EMAILERPW,
          },
        });

        const { _id: userId, email } = await User.create(body);

        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
        });

        await transporter.sendMail({
          from: {
            name: "Tindev",
            address: process.env.EMAILER,
          },
          to: email,
          subject: "Account activation",
          html: `<div>Your account is almost ready. </div> <br /> <div>There is one last thing you need to do : </div> <br /> <div>Click <a href="http://localhost:8080/account/verification/${token}">here</a> to activate your account.</div>`,
        });

        return res
          .status(200)
          .json({ msg: "An email has been sent to your email address" });
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
      const user = await verifyAccountValidator(token, next);

      if (user) {
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authRouter;
