const { Token, User } = require("../../models");
const AccountError = require("../CustomError");

module.exports = async (token, next) => {
  try {
    const activation = await Token.findOne({ token });

    if (!activation) {
      throw new AccountError("This Activation link is not valid anymore.", 400);
    }

    const user = await User.findById(activation.userId);

    await activation.remove();

    return user;
  } catch (error) {
    next(error);
  }
};
