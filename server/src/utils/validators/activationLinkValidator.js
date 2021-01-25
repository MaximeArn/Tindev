const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (body, next) => {
  try {
    const [key, value] = Object.entries(body)[0];
    const user = await User.findOne({ [key]: value });

    if (!user) {
      throw new UserError("This user doesn't exists", 404);
    }

    return user;
  } catch (error) {
    next(error);
  }
};
