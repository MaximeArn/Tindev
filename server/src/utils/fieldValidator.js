const comparePasswords = require("../secure/comparePasswords");
const hash = require("../secure/hashPassword");
const { User } = require("../models");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

module.exports = async (body) => {
  try {
    const { age, city, lastname, firstname, ...mandatory } = body;
    const requiredFields = Object.values(mandatory).every((value) => value);

    if (!requiredFields) {
      return new Error("Some required fields were not provided");
    }

    if (!body.email.match(emailRegex))
      return new Error("Invalid email address");

    if (body.age && isNaN(body.age)) return new Error("Incorrect age format");

    if (!comparePasswords(body)) {
      return new Error("Passwords do not match");
    }

    body.password = await hash(body.password);

    const user = await User.findOne({
      $or: [{ email: body.email }, { username: body.username }],
    });

    return user
      ? new Error("Email or Username already in use")
      : { success: true };
  } catch (err) {
    console.error(err);
  }
};
