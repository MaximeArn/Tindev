const sanitize = require("sanitize-html");
const { User } = require("../../models");
const UserError = require("../CustomError");
const sanitizeConfig = require("../../config/sanitize");
const hash = require("../hashPassword.js");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

module.exports = async (body, next) => {
  console.log("USER VALIDATOR CALLED", body);
  try {
    const key = Object.keys(body)[0];

    if (key === "username") {
      const exists = await User.findOne({ username: body[key] });

      if (exists) throw new UserError("This username already exists", 400);
      if (!body[key]) throw new UserError("Username must not be empty", 400);

      body[key] = body[key].replace(" ", "");
    }

    if (key === "email") {
      const exists = await User.findOne({ email: body[key] });

      if (exists) throw new UserError("This email already exists", 400);

      if (!body[key].match(emailRegex)) {
        throw new UserError("This email is invalid", 400);
      }
    }

    if (key === "age") {
      if (isNaN(body[key]) || body[key] <= 0) {
        throw new UserError("Invalid age format provided", 400);
      }
    }

    if (key === "about") {
      if (body[key].length < 50) {
        throw new UserError("Experience must contain 50 characters at least");
      }
    }

    if (key === "password") {
      const { password, confirmPassword } = JSON.parse(body[key]);
      if (!(password === confirmPassword)) {
        throw new UserError("Passwords do not match", 400);
      }

      body[key] = await hash(sanitize(password, sanitizeConfig));
    }

    if (key !== "password") body[key] = sanitize(body[key], sanitizeConfig);

    return true;
  } catch (error) {
    next(error);
  }
};
