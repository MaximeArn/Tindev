const jwt = require("jsonwebtoken");
const UserError = require("../CustomError");
const secret = process.env.SECRET;

module.exports = (token, next) => {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (error, decoded) => {
        if (error) {
          throw new UserError("Token is corrupted, please sign in again.", 403);
        }

        resolve(decoded);
      });
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
