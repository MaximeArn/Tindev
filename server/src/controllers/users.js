/** @format */
const User = require("../models/User");

const usersController = {
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = usersController;
