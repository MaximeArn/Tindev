const { User } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (field, next) => {
  try {
    const [key, value] = Object.entries(field)[0];
    console.log("field -->", field);
    console.log(key, value);
    const user = await User.findOne(
      { [key]: value },
      { password: 0, messages: 0, notifications: 0 }
    );
    if (!user) throw new UserError("This user does not exist.", 404);

    return user;
  } catch (error) {
    next(error);
  }
};
