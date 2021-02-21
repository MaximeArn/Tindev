const jwt = require("jsonwebtoken");

module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    const { id, ...credentials } = decoded;
    return decoded.authType === "google"
      ? res.status(200).json(credentials)
      : res.status(202);
  },
  extendJwt: ({ decoded }, res, next) => {
    const { id, ...credentials } = decoded;
    res
      .cookie("token", jwt.sign(decoded, SECRET, { expiresIn: "7d" }))
      .status(200)
      .json(credentials);
  },
};
