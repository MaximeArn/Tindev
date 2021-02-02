const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (field, next) => {
  try {
    const user = await User.findOne(field, {
      password: 0,
      messages: 0,
      notifications: 0,
      __v: 0,
      activated: 0,
      expire_at: 0,
      createdAt: 0,
      updatedAt: 0,
      chatWindows: 0,
    });

    if (!user) throw new UserError("This user does not exist.", 404);

    return user;
  } catch (error) {
    next(error);
  }
};
