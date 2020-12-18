const { Token, User } = require("../../models");
const AccountError = require("../CustomError");

module.exports = async (token, next) => {
  try {
    const token = await Token.findOne({ token });

    if (!token.userId) {
      throw new AccountError("This Activation link is not valid anymore.", 400);
    }

    const user = await User.findById(userId);

    await token.remove();

    return user;
  } catch (error) {
    next(error);
  }
};
