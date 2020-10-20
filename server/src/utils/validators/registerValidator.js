/** @format */

const comparePasswords = require("../comparePasswords");
const hash = require("../hashPassword");
const { User } = require("../../models");
const UserError = require("../CustomError");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

module.exports = async (body, next) => {
  try {
    const { age, city, lastname, firstname, ...mandatory } = body;
    const requiredFields = Object.values(mandatory).every((value) => value);

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

    body.password = await hash(body.password);

    const user = await User.findOne({
      $or: [{ email: body.email }, { username: body.username }],
    });

    if (user) throw new UserError("Email or Username already in use", 400);

    return { success: true };
  } catch (error) {
    next(error);
  }
};
