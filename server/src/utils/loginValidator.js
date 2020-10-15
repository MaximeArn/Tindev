const { User } = require("../models");
const UserError = require("../utils/CustomError");
const compareHashed = require("../utils/compareHashed");

module.exports = async (body) => {
  try {
    const { password, email } = body;
    const user = await User.findOne({ email });

    if (!user) throw new UserError("Incorrect Email or Password");

    const isPasswordMatching = await compareHashed(password, user.password);

    if (!isPasswordMatching) throw new UserError("Incorrect Email or Password");

    return user;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
