const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (username, next) => {
  try {
    const user = await User.findOne({ username });
    if (!user) throw new UserError("This user does not exist.", 404);

    return user;
  } catch (error) {
    next(error);
  }
};
