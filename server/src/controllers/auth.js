const {
  loginValidator,
  registerValidator,
  tokenValidator,
} = require("../utils/validators");
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
  logout: async (connectedUsers, { cookies: { io } }, res, next) => {
    Object.entries(connectedUsers).forEach(
      ([key, value]) => value == io && delete connectedUsers[key]
    );
  },
  verify: async ({ cookies: { token } }, res, next) => {
    try {
      const { username, email } = await tokenValidator(token, next);
      return email && username && res.status(200).json({ username, email });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authRouter;
