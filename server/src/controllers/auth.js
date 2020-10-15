/** @format */

const fieldValidator = require("../utils/authFieldValidator");
const loginValidator = require("../utils/loginValidator");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User } = require("../models");

const authRouter = {
  register: async (req, res, next) => {
    const { body } = req;
    try {
      const validator = await fieldValidator(body, next);

      if (validator) {
        const result = await User.create(body);
        res.status(200).json({ result, msg: "Account Successfully created" });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  login: async (req, res, next) => {
    const user = await loginValidator(req.body, next);

    if (user) {
      const token = jwt.sign({ id: user.id, email: user.email }, secret);
      return res.status(200).json({
        token,
        email: user.email,
        username: user.username,
      });
    }
  },
  verify: (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (error, decoded) => {
      if (decoded) {
        User.findOne({ email: decoded.email })
          .then(({ username, email }) => {
            return email && res.status(200).json({ username, email });
          })
          .catch((error) => {
            console.error(error);
            next(error);
          });
      }
    });
  },
};

module.exports = authRouter;
