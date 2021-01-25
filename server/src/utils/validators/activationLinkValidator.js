const { User } = require("../../models");
const emailRegex = require("../emailRegex");
const UserError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");
module.exports = async (body, next) => {
  try {
    const [key, value] = Object.entries(body)[0];
    const user = await User.findOne({ [key]: sanitize(value, sanitizeConfig) });

    if ((key === "email" && !value.match(emailRegex)) || !user) {
      throw new UserError("Invalid credentials", 400);
    }

    return user;
  } catch (error) {
    next(error);
  }
};
