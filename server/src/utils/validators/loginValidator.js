const { User } = require("../../models");
const UserError = require("../CustomError");
const compareHashed = require("../compareHashed");

module.exports = async (body, next) => {
  try {
    const { password, email } = body;
    const user = await User.findOne({ email });

    if (!user) throw new UserError("Incorrect Email or Password");

    const isPasswordMatching = await compareHashed(password, user.password);

    if (!isPasswordMatching) throw new UserError("Incorrect Email or Password");

    if (!user.activated) {
      throw new UserError(
        "Please verify your email address to activate your account.",
        403
      );
    }

    return user;
  } catch (error) {
    next(error);
  }
};
