/** @format */
const { User } = require("../models");
const {
  tokenValidator,
  userValidator,
  userProfileValidator,
  userUpdateValidator,
} = require("../utils/validators");

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
  getUserProfile: async ({ cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);
      const user = await userProfileValidator(id, next);

      if (id && user) {
        return res.status(200).json(user);
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

      const fromUser = User.findOne({
        _id: fromId,
      }).sort({
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
  update: async (
    { body, file: { fieldname, filename }, cookies: { token } },
    res,
    next
  ) => {
    try {
      const { id } = await tokenValidator(token, next);
      const valid = await userUpdateValidator(body, next);

      if (id && valid) {
        const key = fieldname ? fieldname : Object.keys(body)[0];
        const user = await User.findOneAndUpdate(
          { _id: id },
          { [key]: filename || body[key] },
          { new: true, fields: { password: 0, messages: 0 } }
        );

        return res
          .status(200)
          .json({ msg: "Profile successfully updated", user });
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
