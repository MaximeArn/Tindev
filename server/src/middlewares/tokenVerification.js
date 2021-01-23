const { verify } = require("jsonwebtoken");
const TokenError = require("../utils/CustomError");
const { User } = require("../models");
const SECRET = process.env.SECRET;
const notProtectedPaths = new RegExp(/^\/(admin|auth)/i);

module.exports = (req, res, next) => {
  const {
    path,
    cookies: { token },
  } = req;

  path.match(notProtectedPaths) && next();

  verify(token, SECRET, async (error, decoded) => {
    try {
      if (error) {
        throw new TokenError("Please sign in", 401);
      }

      const user = await User.findById(decoded.id);

      if (!user) {
        throw new TokenError("Please sign in", 401);
      }

      if (user.suspended.status) {
        throw new TokenError("This account has been suspended", 401);
      }

      req.decoded = decoded;
      next();
    } catch (error) {
      next(error);
    }
  });
};
