const { User } = require("../../models");
const UserError = require("../CustomError");
const compareHashed = require("../compareHashed");

module.exports = async (body, res, next) => {
  try {
    const { password, email } = body;
    const user = await User.findOne({ email });

    if (!user) throw new UserError("Incorrect Email or Password", 400);

    const isPasswordMatching = await compareHashed(password, user.password);

    if (!isPasswordMatching) {
      throw new UserError("Incorrect Email or Password", 400);
    }

    if (!user.activated) {
      res.status(403).json({
        msg: "Please verify your email address to activate your account",
        email: user.email,
      });

      return null;
    }

    return user;
  } catch (error) {
    next(error);
  }
};
