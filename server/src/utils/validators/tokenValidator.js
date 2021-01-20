const jwt = require("jsonwebtoken");
const UserError = require("../CustomError");
const { User } = require("../../models");
const secret = process.env.SECRET;

module.exports = async (token, next) => {
  try {
    return jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        throw new UserError("Please sign in", 401);
      }

      const user = await User.findById(decoded.id);

      if (!user) throw new UserError("Please sign in", 401);

      if (user.suspended.status) {
        throw new UserError("This account has been suspended", 401);
      }

      return decoded;
    });
  } catch (error) {
    next(error);
  }
};
