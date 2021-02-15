const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = async (idToken, next) => {
  try {
    const {
      payload: {
        email,
        picture: avatar,
        name: username,
        given_name: firstname,
        family_name: lastname,
        sub: userId,
      },
    } = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    return {
      email,
      avatar,
      username,
      lastname,
      firstname,
      // userId, maybe useful
    };
  } catch (error) {
    console.error(error);
    next(error);
  }
};
