const { verify } = require("jsonwebtoken");
const TokenError = require("../utils/CustomError");
const { User } = require("../models");
const isObject = require("../utils/isObject");
const googleRefreshToken = require("../utils/googleRefreshToken");
const SECRET = process.env.SECRET;
const unProtectedPaths = new RegExp(/^\/(admin|auth)/i);

module.exports = (req, res, next) => {
  const {
    path,
    cookies: { token },
  } = req;

  if (path.match(unProtectedPaths)) {
    return next();
  }

  if (!token) {
    throw new TokenError("Please sign in", 401);
  }

  verify(token, SECRET, async (error, decoded) => {
    try {
      if (isObject(token)) {
        googleRefreshToken(token, res, next);
        return;
      }

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
