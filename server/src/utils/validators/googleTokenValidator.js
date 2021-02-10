const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = async (idToken, next) => {
  try {
    const {
      payload: { email, picture, name, familyName, sub: userId },
    } = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    console.log({
      email,
      picture,
      name,
      familyName,
      // userId, maybe useful
    });
  } catch (error) {
    next(error);
  }
};
