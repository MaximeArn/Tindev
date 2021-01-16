const { Token, User } = require("../../models");
const AccountError = require("../CustomError");

module.exports = async (t, next) => {
  try {
    const token = await Token.findOne({ token: t });
    const user = token && (await User.findById(token.userId));

    if (!token || !user) {
      throw new AccountError("This Activation link is not valid anymore.", 403);
    }

    if (new Date().getTime() > token.expire.getTime()) {
      await token.remove();
      throw new AccountError("This activation link has expired.", 403);
    }

    await token.remove();

    return user._id;
  } catch (error) {
    next(error);
  }
};
