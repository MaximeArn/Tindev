const jwt = require("jsonwebtoken");
const UserError = require("../CustomError");
const secret = process.env.SECRET;

module.exports = async (token, next) => {
  return jwt.verify(token, secret, async (error, decoded) => {
    try {
      if (error) {
        throw new UserError("User not found, please sign in.", 403);
      }

      return decoded;
    } catch (error) {
      next(error);
    }
  });
};
