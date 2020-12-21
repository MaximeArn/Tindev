const { Token } = require("../../models");
const TokenError = require("../CustomError");

module.exports = async (t, res, next) => {
  try {
    const token = await Token.findOne({ token: t });

    if (!token) {
      throw new TokenError(
        "This token is invalid, please check your emails for more information",
        403
      );
    }

    // if (Date.now() > token.expire) {
    //   const userId = token.userId;
    //   await token.remove();
    //   console.error(new Error("This token has expired"));
    //   return res.status(403).json({ msg: "This token has expired", userId });
    // }

    return true;
  } catch (error) {
    next(error);
  }
};
