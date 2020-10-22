/** @format */
const { User } = require("../models");
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
  getUserByUsername: async (
    { params: { username }, cookies: { token } },
    res,
    next
  ) => {
    try {
      // const { id } = await tokenValidator(token, next);
      // if (id) {
      const user = await User.findOne({ username });

      // }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
