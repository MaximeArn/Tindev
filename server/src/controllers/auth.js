/** @format */

const { loginValidator, registerValidator } = require("../utils/validators");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User } = require("../models");

const authRouter = {
  register: async ({ body }, res, next) => {
    try {
      const validator = await registerValidator(body, next);

      if (validator) {
        const result = await User.create(body);
        res.status(200).json({ result, msg: "Account Successfully created" });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  login: async ({ body }, res, next) => {
    const user = await loginValidator(body, next);

    if (user) {
      const token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        secret
      );

      return res.status(200).json({
        token,
        email: user.email,
        username: user.username,
      });
    }
  },
  verify: ({ cookies: { token } }, res, next) => {
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
