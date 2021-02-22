const GOOGLE_USER_INFOS_API = process.env.GOOGLE_USER_INFOS_API;
const SECRET = process.env.SECRET;
const { User } = require("../models/index");
const axios = require("../utils/axiosInstance");
const { googleLoginValidator } = require("../utils/validators/index");
const jwt = require("jsonwebtoken");
const cookiesOptions = require("../config/cookies/cookiesOptions");
const OAUTH2_TOKEN_ENDPOINT = process.env.OAUTH2_TOKEN_ENDPOINT;

module.exports = {
  requestGoogleUserInfos: async (accessToken) => {
    try {
      const { expires_in, token_type, access_token } = accessToken;
      accessToken.expire_at = Date.now() / 1000 + expires_in;

      const { data } = await axios.get(GOOGLE_USER_INFOS_API, {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  },
  saveGoogleVerifiedUser: async ({ email, name: username, picture: avatar }, next) => {
    try {
      return (
        (await User.findOne({ email })) ||
        (await User.create({
          email,
          username,
          avatar,
          activated: true,
          expire_at: null,
        }))
      );
    } catch (error) {
      next(error);
    }
  },
  authenticateGoogleVerifiedUser: async (data, token, next) => {
    const user = await googleLoginValidator(data, next);
    const credentials = {
      email: user.email,
      username: user.username,
      role: user.role,
      authType: "google",
    };

    if (user) {
      token.credentials = jwt.sign({ id: user._id, ...credentials }, SECRET);
      return credentials;
    }
  },
  googleRefreshToken: async ({ expire_at, refresh_token, credentials }, res) => {
    if (Date.now() / 1000 > expire_at) {
      const { data: token } = await axios.post(OAUTH2_TOKEN_ENDPOINT, null, {
        params: {
          grant_type: "refresh_token",
          refresh_token,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
      });

      token.expire_at = Date.now() / 1000 + token.expires_in;
      token.credentials = credentials;
      res.cookie("token", token, cookiesOptions);
    }
  },
};
