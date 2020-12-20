const { Token } = require("../../models");
const TokenError = require("../CustomError");

module.exports = async (token, res, next) => {
  try {
    const { expire, userId } = await Token.findOne({ token });

    if (!expire) {
      throw new TokenError(
        "This token is invalid, please check your emails for more information",
        403
      );
    }

    if (Date.now() > expire) {
      console.error(new Error("This token has expired"));
      return res.status(403).json({ msg: "This token has expired", userId });
    }

    return true;
  } catch (error) {
    next(error);
  }
};
