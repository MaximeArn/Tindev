const jwt = require("jsonwebtoken");
const UserError = require("../CustomError");
const { User } = require("../../models");
const { Error } = require("mongoose");
const secret = process.env.SECRET;

module.exports = (token, next) => {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, async (error, { id }) => {
        if (error) {
          reject(new UserError("User not found, please sign in.", 403));
        }

        const exists = await User.findById(id);

        if (!exists) reject(new UserError("User does not exists.", 403));

        resolve(id);
      });
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
