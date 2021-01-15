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
      const {
        suspended: { duration },
      } = user;

      const remaining =
        duration && Math.floor(Math.abs(duration - new Date()) / 36e5);

      if (!isNaN(remaining) && remaining <= -1) {
        user.suspended = {
          status: false,
          duration: false,
        };

        const updated = await user.save();
        return updated;
      }

      const message =
        remaining === false
          ? "Your account has been suspended permanently"
          : `Your account has been suspended for ${remaining} more ${
              remaining <= 1 ? "hour" : "hours"
            }`;

      throw new UserError(message, 403);
    }

    return user;
  } catch (error) {
    next(error);
  }
};
