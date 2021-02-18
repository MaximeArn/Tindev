const axios = require("../utils/axiosInstance");
const cookiesOptions = require("../config/cookies/cookiesOptions");
const OAUTH2_TOKEN_ENDPOINT = process.env.OAUTH2_TOKEN_ENDPOINT;

module.exports = async ({ expire_at, refresh_token, credentials }, res) => {
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
};
