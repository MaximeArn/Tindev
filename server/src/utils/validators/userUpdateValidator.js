const sanitize = require("sanitize-html");
const { User } = require("../../models");
const UserError = require("../CustomError");
const sanitizeConfig = require("../../config/sanitize");
const hash = require("../hashPassword.js");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

module.exports = async (body, next) => {
  try {
    const [key, value] = Object.entries(body)[0];

    if (key === "username") {
      const exists = await User.findOne({ username: value });

      if (exists) throw new UserError("This username already exists", 400);
      if (!value) throw new UserError("Username must not be empty", 400);

      body[key] = value.replace(" ", "");
    }

    if (key === "email") {
      const exists = await User.findOne({ email: value });

      if (exists) throw new UserError("This email already exists", 400);

      if (!value.match(emailRegex)) {
        throw new UserError("This email is invalid", 400);
      }
    }

    if (key === "age") {
      if (isNaN(value) || value <= 0) {
        throw new UserError("Invalid age format provided", 400);
      }
    }

    if (key === "about") {
      if (value.length < 50) {
        throw new UserError("Experience must contain 50 characters at least");
      }
    }

    if (key === "password") {
      const { password, confirmPassword } = JSON.parse(value);
      if (!(password === confirmPassword)) {
        throw new UserError("Passwords do not match", 400);
      }

      body[key] = await hash(sanitize(password, sanitizeConfig));
    }

    if (key !== "password") body[key] = sanitize(value, sanitizeConfig);

    return true;
  } catch (error) {
    next(error);
  }
};
