const { Token, User } = require("../../models");
const AccountError = require("../CustomError");

module.exports = async (token, next) => {
  try {
    const { userId } = await Token.findOne({ token });

    if (!userId) {
      throw new AccountError("This Activation link is not valid anymore.", 400);
    }

    return await User.findById(userId);
  } catch (error) {
    next(error);
  }
};
