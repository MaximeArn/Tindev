const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (userId, next) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new UserError("This user doesn't exists", 404);
    }

    return user.email;
  } catch (error) {
    next(error);
  }
};
