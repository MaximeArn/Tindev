const jwt = require("jsonwebtoken");
const { User, Token } = require("../models");
const sendAccountActivationEmail = require("../utils/sendAccountConfirmationEmail");
const encryption = require("../utils/encryption");
const mailSender = require("../utils/mailSender");
const setTokenExpiration = require("../utils/tokenExpiration");
const axios = require("../utils/axiosInstance");
const cookiesOptions = require("../config/cookies/cookiesOptions");
const SECRET = process.env.SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const OAUTH2_REDIRECT_URI = process.env.OAUTH2_REDIRECT_URI;
const OAUTH2_TOKEN_ENDPOINT = process.env.OAUTH2_TOKEN_ENDPOINT;
const {
  requestGoogleUserInfos,
  saveGoogleVerifiedUser,
  authenticateGoogleVerifiedUser,
} = require("./google");
const {
  loginValidator,
  registerValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  resetPasswordValidator,
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
      const { _id: id, email, username, role } =
        (await loginValidator(body, res, next)) || {};

      if (id) {
        const token = jwt.sign(
          { id, email, username, role, authType: "standard" },
          SECRET
        );

        return res
          .cookie("token", { credentials: token }, cookiesOptions)
          .status(200)
          .json({
            email,
            username,
            role,
            authType: "standard",
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
  clearCookies: (req, res) => {
    return res.clearCookie("token").end();
  },
  authorize: (req, res) => {
    const oAuth2AuthorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.OAUTH2_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&access_type=offline`;
    return res.status(200).json(oAuth2AuthorizationUrl);
  },
  verify: async ({ body: { code } }, res, next) => {
    try {
      const { data: accessToken } = await axios.post(OAUTH2_TOKEN_ENDPOINT, null, {
        params: {
          grant_type: "authorization_code",
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_CLIENT_SECRET,
          code,
          redirect_uri: OAUTH2_REDIRECT_URI,
        },
      });

      const userInfos = await requestGoogleUserInfos(accessToken);
      const user = await saveGoogleVerifiedUser(userInfos, next);
      const credentials = await authenticateGoogleVerifiedUser(user, accessToken, next);

      return res
        .cookie("token", accessToken, cookiesOptions)
        .status(200)
        .json(credentials);
    } catch (error) {
      console.error(error);
    }
  },
  extendJwt: (req, res, next) => {},
};

module.exports = authController;
