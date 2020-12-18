const { Token } = require("../../models");
const TokenError = require("../CustomError");

module.exports = async (token, next) => {
  try {
    if (!(await Token.findOne({ token }))) {
      throw new TokenError(
        "This token is invalid, please check your emails for more information",
        403
      );
    }

    return true;
  } catch (error) {
    next(error);
  }
};
