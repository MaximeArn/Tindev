const { verify } = require("jsonwebtoken");
const { User } = require("../models");
const TokenError = require("../utils/CustomError");

module.exports = ({ cookies: { token } }, res, next) => {
  try {
    verify(token, process.env.SECRET, async (error, { id, role }) => {
      if (error) {
        throw new TokenError("Corrupted Token", 403);
      }

      if (!(await User.findById(id))) {
        throw new TokenError("This token is invalid", 400);
      }

      if (role !== "Admin") {
        throw new TokenError("Unauthorized access", 403);
      }

      next();
    });
  } catch (error) {
    next(error);
  }
};
