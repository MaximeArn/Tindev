const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (id, next) => {
  try {
    const user = await User.findById(id);

    if (!user) return new UserError("User not found", 404);

    return user;
  } catch (error) {
    next(error);
  }
};
