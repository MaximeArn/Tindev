const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { User, Token } = require("../models");
const sendAccountActivationEmail = require("../utils/sendAccountConfirmationEmail");
const encryption = require("../utils/encryption");
const mailSender = require("../utils/mailSender");
const setTokenExpiration = require("../utils/tokenExpiration");
const {
  loginValidator,
  registerValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  resetPasswordValidator,
  googleTokenValidator,
} = require("../utils/validators");

const authController = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const { _id: userId, email, username } = await User.create(body);

        const { token } = await Token.create({
          userId,
          token: encryption(username),
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
        const token = jwt.sign({ id, email, username, role }, SECRET);

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
  logout: async (connectedUsers, { params: { username } }, res, next) => {
    try {
      if (!username) {
        return res.status(200).json({ message: "User was already logged out" });
      }

      const userSocket = connectedUsers[username];

      if (userSocket) {
        const { socket } = userSocket;
        socket.disconnect(true);
      }

      res.clearCookie("token");

      return res.status(200).json({ message: "Socket successfully disconnected" });
    } catch (error) {
      next(error);
    }
  },
  verifyNewLinkToken: async ({ params: { token } }, res, next) => {
    try {
      const validity = await accountTokenValidator(token, res, next);
      validity && res.status(200);
    } catch (error) {
      next(error);
    }
  },
  activateAccount: async ({ params: { token } }, res, next) => {
    try {
      const id = await verifyAccountValidator(token, next);

      if (id) {
        await User.updateOne(id, {
          $unset: { expire_at: "" },
          activated: true,
        });

        return res
          .status(200)
          .json({ msg: "Account successfully activated, you can now login." });
      }
    } catch (error) {
      next(error);
    }
  },
  sendNewLink: async ({ body }, res, next) => {
    try {
      const user = await activationLinkValidator(body, next);

      if (user) {
        const { _id: userId, email, username } = user;
        const { token } = await Token.create({
          userId,
          token: encryption(username),
          expire: setTokenExpiration(15),
        });

        const message = await mailSender(email, token, body.type);

        return res.status(200).json({
          message,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  resetPassword: async ({ body }, res, next) => {
    try {
      const credentials = await resetPasswordValidator(body, next);

      if (credentials) {
        const { password, _id } = credentials;
        await User.findByIdAndUpdate(_id, { password });
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
  googleRegister: async (req, res, next) => {
    console.log(req);
    const {
      body: { tokenId },
    } = req;
    const userData = await googleTokenValidator(tokenId, next);
    const userExists = await registerValidator(userData, next, true);
    if (userExists) {
      authController.googleLogin(req, res, next);
    } else {
      User.create(body);
      res.send("user well registered").status(200);
    }
  },
  googleLogin: async (req, res, next) => {
    const {
      body: { tokenId },
    } = req;
    console.log(tokenId);
    const userData = await googleTokenValidator(tokenId, next);
    console.log(userData);
    res.send("user well loged").status(200);
  },
};

module.exports = authController;
