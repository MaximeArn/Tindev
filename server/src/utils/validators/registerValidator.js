const comparePasswords = require("../comparePasswords");
const hash = require("../hashPassword");
const { User } = require("../../models");
const UserError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

module.exports = async (body, next) => {
  try {
    const { age, city, lastname, firstname, ...mandatory } = body;
    const requiredFields = Object.values(mandatory).every((value) => value);
    body.username = body.username.replace(" ", "");

    if (!requiredFields) {
      throw new UserError("Some required fields were not provided", 400);
    }

    if (!body.email.match(emailRegex)) {
      throw new UserError("Invalid email address", 400);
    }

    if ((body.age && isNaN(body.age)) || body.age < 0) {
      throw new UserError("Incorrect age format", 400);
    }

    if (!comparePasswords(body)) {
      throw new UserError("Passwords do not match", 400);
    }

    const user = await User.findOne({
      $or: [{ email: body.email }, { username: body.username }],
    });

    if (user) throw new UserError("Email or Username already in use", 400);

    for (const key in body) {
      body[key] = sanitize(body[key], sanitizeConfig);
    }

    body.password = await hash(body.password);

    return { success: true };
  } catch (error) {
    next(error);
  }
};
