const { tokenValidator } = require("../../utils/validators");
const TokenError = require("../../utils/CustomError");

module.exports = async ({ request: { headers } }, next) => {
  try {
    const token = headers.cookie.substr(6);
    const user = await tokenValidator(token, next);

    if (!user) throw new TokenError("Invalid token provided", 403);

    next();
  } catch (error) {
    console.error(error);
  }
};
