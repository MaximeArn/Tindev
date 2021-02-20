const GOOGLE_USER_INFOS_API = process.env.GOOGLE_USER_INFOS_API;
const SECRET = process.env.SECRET;
const { User } = require("../models/index");
const axios = require("../utils/axiosInstance");
const { googleLoginValidator } = require("../utils/validators/index");
const jwt = require("jsonwebtoken");

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
  authenticateGoogleVerifiedUser: async (user, token, next) => {
    const { _id, email, username, role } = (await googleLoginValidator(user, next)) || {};
    const authType = "google";

    if (email) {
      token.credentials = jwt.sign({ id: _id, email, username, role, authType }, SECRET);
      return { email, username, role, authType };
    }
  },
};
