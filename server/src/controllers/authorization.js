const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const cookiesOptions = require("../config/cookies/cookiesOptions");

module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    const { id, iat, ...credentials } = decoded;
    return decoded.authType === "google"
      ? res.status(200).json(credentials)
      : res.status(202).end();
  },
  extendJwt: ({ decoded }, res) => {
    const { id, exp, iat, ...credentials } = decoded;
    const token = jwt.sign({ id, ...credentials }, SECRET, { expiresIn: "7d" });

    res
      .cookie("token", { credentials: token }, cookiesOptions)
      .status(200)
      .json(credentials);
  },
};
