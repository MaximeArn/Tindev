const { tokenValidator } = require("../../utils/validators");
const TokenError = require("../../utils/CustomError");

module.exports = async (socket, next) => {
  try {
    const { cookie } = socket.request.headers;
    const token = cookie && cookie.substr(6);
    const decoded = await tokenValidator(token, next);

    if (!decoded) throw new TokenError("Invalid token provided", 403);

    socket.decoded = decoded;
    next();
  } catch (error) {
    console.error(error);
  }
};
