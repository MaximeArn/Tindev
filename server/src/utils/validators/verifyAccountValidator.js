const { Token, User } = require("../../models");
const AccountError = require("../CustomError");

module.exports = async (t, next) => {
  try {
    const token = await Token.findOne({ token: t });

    if (!token) {
      throw new AccountError("This Activation link is not valid anymore.", 403);
    }

    if (Date.now() > token.expire) {
      await token.remove();
      throw new AccountError("This activation link has expired.", 403);
    }

    const user = await User.findById(token.userId);

    await token.remove();

    return user._id;
  } catch (error) {
    next(error);
  }
};
