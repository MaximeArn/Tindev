const regex = require("../emailRegex");
const UserError = require("../CustomError");
const { User } = require("../../models");
const sanitize = require("sanitize-html");

module.exports = async (email, next) => {
  try {
    email = sanitize(email);
    const user = await User.findOne({ email });

    if (!email.match(regex)) {
      throw new UserError("This email is invalid.", 400);
    }

    if (!user) {
      throw new UserError(
        "There is no account associated with this email address.",
        400
      );
    }

    return user;
  } catch (error) {
    next(error);
  }
};
