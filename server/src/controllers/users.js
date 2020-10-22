/** @format */
const User = require("../models/User");
const { tokenValidator } = require("../utils/validators");

const usersController = {
  getUsers: async ({ cookies: { token } }, res, next) => {
    try {
      const user = await tokenValidator(token, next);

      if (user) {
        const users = await User.find();
        return res.status(200).json(users);
      }
    } catch (error) {
      next(error);
    }
  },
  getUserByUsername: async ({ body, cookies: { token } }, res, next) => {
    console.log(body);
    try {
      const user = await tokenValidator(token, next);

      if (user) {
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
