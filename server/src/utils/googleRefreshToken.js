const axios = require("../utils/axiosInstance");
const cookiesOptions = require("../config/cookies/cookiesOptions");
const OAUTH2_TOKEN_ENDPOINT = process.env.OAUTH2_TOKEN_ENDPOINT;

module.exports = async ({ expire_at, refresh_token }, res) => {
  console.log({ current: Date.now() / 1000, expire: expire_at });

  if (Date.now() / 1000 > expire_at) {
    const { data: token } = await axios.post(OAUTH2_TOKEN_ENDPOINT, null, {
      params: {
        grant_type: "refresh_token",
        refresh_token,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
      },
    });

    //TODO: implement credential object on default method login instead of directly setting jwt in token cookie
    res.cookie("token", token, cookiesOptions);
  }
};
