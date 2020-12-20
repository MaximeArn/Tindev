const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (userId, next) => {
  try {
    const { email } = await User.findById(userId);

    if (!email) {
      throw new UserError("This user doesn't exists", 404);
    }

    return email;
  } catch (error) {
    next(error);
  }
};
