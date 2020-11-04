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
      const { id: fromId } = await tokenValidator(token, next);

      const fromUser = User.findOne({ _id: fromId }).sort({
        "messages.date": -1,
      });

      const toUser = User.findOne({ _id: toId }).sort({
        "messages.date": -1,
      });

      const [
        { messages: fromMessages },
        { messages: toMessages },
      ] = await Promise.all([fromUser, toUser]);

      const sortedFromMessages = fromMessages.filter(
        ({ to: { id } }) => id == toId
      );
      const sortedToMessages = toMessages.filter(
        ({ to: { id } }) => id == fromId
      );

      return res
        .status(200)
        .json({ to: sortedToMessages, from: sortedFromMessages });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
