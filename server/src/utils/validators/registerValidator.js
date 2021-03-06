const comparePasswords = require("../comparePasswords");
const { User } = require("../../models");
const UserError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");
const emailRegex = require("../emailRegex");

module.exports = async (body, next) => {
  try {
    body.username = body.username.replace(" ", "");
    const { age, city, lastname, firstname, ...mandatory } = body;

    if (!Object.values(mandatory).every((value) => value.trim())) {
      throw new UserError("Some required fields were not provided", 400);
    }

    if (!body.email.match(emailRegex)) {
      throw new UserError("Invalid email address", 400);
    }

    if (body.age && (isNaN(parseInt(body.age)) || body.age < 0)) {
      throw new UserError("Incorrect age specified", 400);
    }

    if (!(await comparePasswords(body))) {
      throw new UserError("Passwords do not match", 400);
    }

    const user = await User.findOne({
      $or: [{ email: body.email }, { username: body.username }],
    });

    if (user) throw new UserError("Email or Username already in use", 400);

    for (const key in body) {
      body[key] = sanitize(body[key], sanitizeConfig);
    }

    return true;
  } catch (error) {
    next(error);
  }
};
