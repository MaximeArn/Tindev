const { User } = require("../../models");
const UserError = require("../CustomError");
module.exports = async (user, next) => {
  if (user.suspended.status) {
    const { duration } = user.suspended;

    if (!duration) {
      throw new UserError("Your account has been suspended permanently", 403);
    }

    if (Date.now() > duration.getTime()) {
      user.suspended = {
        status: false,
        duration: false,
      };

      const updated = await user.save();
      return updated;
    }

    const remaining = Math.floor(Math.abs(duration - new Date()) / 36e5);

    throw new UserError(
      `Your account has been suspended for ${remaining} more ${
        remaining <= 1 ? "hour" : "hours"
      }`,
      403
    );
  }
};
