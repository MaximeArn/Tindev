const { User } = require("../../models");
const UserError = require("../CustomError");
const compareHashed = require("../compareHashed");

module.exports = async (body, res, next) => {
  try {
    const { password, email } = body;
    const user = await User.findOne({ email });

    if (!user) throw new UserError("Incorrect Email or Password", 400);

    if (!(await compareHashed(password, user.password))) {
      throw new UserError("Incorrect Email or Password", 400);
    }

    if (!user.activated) {
      res.status(403).json({
        msg: "Please verify your email address to activate your account",
        userId: user._id,
      });

      return null;
    }

    if (user.suspended.status) {
      throw new UserError("Your account has been suspended until x", 403);
    }

    return user;
  } catch (error) {
    next(error);
  }
};
