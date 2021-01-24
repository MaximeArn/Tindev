const regex = require("../emailRegex");
const UserError = require("../CustomError");
const { User } = require("../../models");
const sanitize = require("sanitize-html");
const sanitizeCfg = require("../../config/sanitize");
module.exports = async (body, next) => {
  try {
    body.email = sanitize(body.email, sanitizeCfg);

    if (!body.email.match(regex)) {
      throw new UserError("This email is invalid.", 400);
    }

    const user = await User.findOne(body);

    if (!user) {
      throw new UserError("There is no account associated with this email address.", 400);
    }

    return user;
  } catch (error) {
    next(error);
  }
};
