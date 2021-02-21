const jwt = require("jsonwebtoken");

module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    const { id, ...credentials } = decoded;
    return res.status(decoded.authType === "google" ? 200 : 202).json(credentials);
  },
  extendJwt: ({ decoded }, res, next) => {
    const { id, ...credentials } = decoded;
    return decoded.authType === "standard"
      ? res
          .cookie("token", jwt.sign(decoded, SECRET, { expiresIn: "7d" }))
          .status(200)
          .json(credentials)
      : res.status(200).json(credentials);
  },
};
