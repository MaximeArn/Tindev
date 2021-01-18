const { verify } = require("jsonwebtoken");
const { User } = require("../models");
const TokenError = require("../utils/CustomError");

module.exports = ({ cookies: { token } }, res, next) => {
  verify(token, process.env.SECRET, async (error, { id }) => {
    try {
      if (error) {
        throw new TokenError("Corrupted Token", 403);
      }

      const user = await User.findById(id);

      if (!user) {
        throw new TokenError("This token is invalid", 400);
      }

      if (user.role !== "Admin") {
        throw new TokenError("Unauthorized access", 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  });
};
