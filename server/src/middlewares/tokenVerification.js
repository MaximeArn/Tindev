const { verify } = require("jsonwebtoken");
const TokenError = require("../utils/CustomError");
const { User } = require("../models");
const { googleRefreshToken } = require("../controllers/google");
const SECRET = process.env.SECRET;
const unProtectedPaths = new RegExp(/^\/(admin|auth)/i);

module.exports = (req, res, next) => {
  const {
    path,
    cookies: { token },
  } = req;

  console.log(path);

  if (path.match(unProtectedPaths)) {
    return next();
  }

  if (!token) {
    console.log("AH IL ETAIT PAS PRESENT : ", token);
    throw new TokenError("Please sign in", 401);
  }

  verify(token.credentials, SECRET, async (error, decoded) => {
    try {
      token.hasOwnProperty("access_token") && (await googleRefreshToken(token, res));

      if (error) {
        throw new TokenError("Please sign in", 401);
      }

      if (decoded.exp && Math.floor(Date.now() / 1000) > decoded.exp) {
        throw new TokenError("Token has expired", 401);
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
