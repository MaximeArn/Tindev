const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const OAUTH2_REDIRECT_URI = process.env.OAUTH2_REDIRECT_URI;
const OAUTH2_TOKEN_ENDPOINT = process.env.OAUTH2_TOKEN_ENDPOINT;
const GOOGLE_USER_INFOS_API = process.env.GOOGLE_USER_INFOS_API;
const { User, Token } = require("../models");
const sendAccountActivationEmail = require("../utils/sendAccountConfirmationEmail");
const encryption = require("../utils/encryption");
const mailSender = require("../utils/mailSender");
const setTokenExpiration = require("../utils/tokenExpiration");
const crypto = require("crypto-random-string");
const axios = require("../utils/axiosInstance");
const cookiesOptions = require("../config/cookies/cookiesOptions");
const {
  loginValidator,
  registerValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  resetPasswordValidator,
  googleLoginValidator,
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
        const credentials = jwt.sign({ id, email, username, role }, SECRET);

        return res.cookie("token", { credentials }, cookiesOptions).status(200).json({
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

      return res
        .clearCookie("token")
        .status(200)
        .json({ message: "Socket successfully disconnected" });
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
    return res.clearCookie("token").end();
  },
  authorize: (req, res) => {
    const state = crypto({ length: 30, type: "url-safe" });
    const oAuth2AuthorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.OAUTH2_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&state=${state}&include_granted_scopes=true&access_type=offline`;
    return res.status(200).json(oAuth2AuthorizationUrl);
  },
  verify: async ({ body: { code } }, res, next) => {
    try {
      const { data } = await axios.post(OAUTH2_TOKEN_ENDPOINT, null, {
        params: {
          grant_type: "authorization_code",
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_CLIENT_SECRET,
          code,
          redirect_uri: OAUTH2_REDIRECT_URI,
        },
      });

      authController.requestGoogleUserInfos(data, res, next);
    } catch (error) {
      console.error(error);
    }
  },
  requestGoogleUserInfos: async (accessToken, res, next) => {
    try {
      const { expires_in, token_type, access_token } = accessToken;
      accessToken.expire_at = Date.now() / 1000 + expires_in;

      const { data } = await axios.get(GOOGLE_USER_INFOS_API, {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      });

      authController.saveGoogleVerifiedUser(data, accessToken, res, next);
    } catch (error) {
      console.error(error);
    }
  },
  saveGoogleVerifiedUser: async (
    { email, name: username, picture: avatar, verified_email },
    token,
    res,
    next
  ) => {
    try {
      const user =
        (await User.findOne({ email })) ||
        (await User.create({
          email,
          username,
          avatar,
          activated: verified_email,
          expire_at: null,
        }));

      authController.authenticateGoogleVerifiedUser(user, token, res, next);
    } catch (error) {
      next(error);
    }
  },
  authenticateGoogleVerifiedUser: async (user, token, res, next) => {
    const { _id, email, username, role } = (await googleLoginValidator(user, next)) || {};
    token.credentials = jwt.sign({ id: _id, email, username, role }, SECRET);

    if (email) {
      return res
        .cookie("token", token, cookiesOptions)
        .status(200)
        .json({ email, username, role });
    }
  },
};

module.exports = authController;
