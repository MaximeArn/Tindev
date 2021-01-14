const jwt = require("jsonwebtoken");
const UserError = require("../CustomError");
const { User } = require("../../models");
const secret = process.env.SECRET;

module.exports = async (token, next) => {
  try {
    return jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        throw new UserError("User not found, please sign in.", 403);
      }

      const exists = await User.findById(decoded.id);

      if (!exists) throw new UserError("User does not exists.", 403);

      //TODO: check if user is not suspended

      return decoded;
    });
  } catch (error) {
    next(error);
  }
};
