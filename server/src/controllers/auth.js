const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User, Token } = require("../models");
const SHA256 = require("crypto-js/sha256");
const sendMail = require("../utils/sendEmailAccountConfirmation");
const transporter = require("../utils/nodeMailerTransporter");
const {
  loginValidator,
  registerValidator,
  tokenValidator,
  logoutValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  forgotPasswordValidator,
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
  sendActivationLink: async ({ params: { userId } }, res, next) => {
    try {
      const email = await activationLinkValidator(userId, next);

      if (email) {
        const { token } = await Token.create({
          userId,
          token: SHA256(userId),
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
  forgotPassword: async ({ body: { email } }, res, next) => {
    try {
      const user = await forgotPasswordValidator(email, next);

      if (user) {
        const { _id: userId, email: userEmail } = user;

        const { token } = await Token.create({
          userId: userId,
          token: SHA256(userId),
        });

        const response = await transporter.sendMail({
          from: "'Tindev' <no-reply@tindev.com>",
          to: userEmail,
          subject: "Forgotten Password",
          html: `<div>We received a request to reset your password. </div> <br /> <div>Click <a href="http://localhost:8080/account/verify/${token}">here</a> to reset your password.</div> <br /> <div>If the origin of the request wasn't yours, please ignore this message.</div>`,
        });

        console.log("TRANSPORTER RESPONSE : ", response);

        return (
          response &&
          res
            .status(200)
            .json({ message: "An email has been sent to your email address" })
        );
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authRouter;
