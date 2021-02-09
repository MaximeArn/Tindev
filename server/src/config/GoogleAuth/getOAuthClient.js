const { OAuth2Client } = require("google-auth-library");

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    const authorizedUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    });
    console.log(oAuth2Client);

    // const { data } = await oAuth2Client.request({
    //   url: "https://people.googleapis.com/v1/people/me?personFields=names",
    // });
    // console.log(data);
  });
};
