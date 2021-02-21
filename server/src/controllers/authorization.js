const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    const { id, ...credentials } = decoded;
    return decoded.authType === "google"
      ? res.status(200).json(credentials)
      : res.status(202).end();
  },
  extendJwt: ({ decoded }, res, next) => {
    const { id, exp, iat, ...credentials } = decoded;
    res
      .cookie("token", jwt.sign({ id, ...credentials }, SECRET, { expiresIn: "7d" }))
      .status(200)
      .json(credentials);
  },
};
