const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (body, next) => {
  try {
    const { id } = body;

    const user = await User.findById(id);

    if (!user) throw new UserError("Target User does not exist.", 404);

    return body;
  } catch (error) {
    next(error);
  }
};
