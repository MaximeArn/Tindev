const { tokenValidator } = require("../../utils/validators");
const TokenError = require("../../utils/CustomError");
const qs = require("qs");

module.exports = async (socket, next) => {
  try {
    const { cookie } = socket.request.headers;
    const { credentials } = cookie && JSON.parse(qs.parse(cookie).token.substr(2));
    const decoded = await tokenValidator(credentials, next);

    if (!decoded) throw new TokenError("Invalid token provided", 403);

    socket.decoded = decoded;
    next();
  } catch (error) {
    console.error(error);
  }
};
