const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (field, next) => {
  try {
    const user = await User.findOne(field, {
      password: 0,
      messages: 0,
      notifications: 0,
    });

    if (!user) throw new UserError("This user does not exist.", 404);

    return user;
  } catch (error) {
    next(error);
  }
};
