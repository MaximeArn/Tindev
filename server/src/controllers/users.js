/** @format */
const { User } = require("../models");
const { tokenValidator, userValidator } = require("../utils/validators");

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
      const { id } = await tokenValidator(token, next);
      const user = await userValidator(username, next);
      if (id && user) {
        return res.status(200).json(user);
      }
    } catch (error) {
      next(error);
    }
  },
  getMessageHistory: async (
    { body: { toId }, cookies: { token } },
    res,
    next
  ) => {
    try {
      console.log("HISTORY CONTROLLER");
      const { id: fromId } = await tokenValidator(token, next);

      const fromUser = User.findOne({ _id: fromId });
      const toUser = User.findOne({ _id: toId });

      const [from, to] = await Promise.all([fromUser, toUser]);

      const fromMessages = from.messages.filter(({ to: { id } }) => id == toId);
      const toMessages = to.messages.filter(({ to: { id } }) => id == fromId);

      console.log(fromMessages);
      console.log(toMessages);
      return res.status(200).json({ to: toMessages, from: fromMessages });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
