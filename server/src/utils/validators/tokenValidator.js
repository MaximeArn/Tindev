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

      const user = await User.findById(decoded.id);

      if (!user) throw new UserError("This user does not exists.", 403);

      if (user.suspended.status) {
        throw new UserError("This account has been suspended", 403);
      }

      return decoded;
    });
  } catch (error) {
    next(error);
  }
};
