const { verify } = require("jsonwebtoken");
const TokenError = require("../utils/CustomError");
const { User } = require("../models");
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

  verify(token.credentials, SECRET, async (error, decoded) => {
    try {
      token.hasOwnProperty("access_token") && (await googleRefreshToken(token, res));

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
