const axios = require("axios");
const cookiesOptions = require("../config/cookies/cookiesOptions");

module.exports = async ({ expire_at, refresh_token }, res, next) => {
  console.log({ current: Date.now() / 1000, expire: expire_at });
  if (Date.now() / 1000 > expire_at) {
    const { data: token } = await axios.post(
      "https://accounts.google.com/o/oauth2/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          refresh_token,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    );

    //TODO: implement credential object on default method login instead of directly setting jwt in token cookie
    res.cookie("token", token, cookiesOptions);
    next();
  }

  next();
};
