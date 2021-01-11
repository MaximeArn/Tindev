const { User } = require("../models");
const {
  tokenValidator,
  userProfileValidator,
  userUpdateValidator,
  deleteProfileValidator,
  chatWindowValidator,
} = require("../utils/validators");

const usersController = {
  getUsers: async ({ cookies: { token } }, res, next) => {
    try {
      const { username } = await tokenValidator(token, next);

      if (username) {
        const users = await User.find(
          { username: { $ne: username } },
          { password: 0 }
        );

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
      const user = await userProfileValidator(username, next);

      if (id && user) {
        console.log("RETURNED USER : ", user);
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
  update: async ({ body, file, cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);
      const valid = await userUpdateValidator(body, next);

      if (id && valid) {
        const key = file ? file.fieldname : Object.keys(body)[0];
        const user = await User.findOneAndUpdate(
          { _id: id },
          { [key]: file ? file.filename : body[key] },
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
  deleteProfile: async ({ params: { id } }, res, next) => {
    try {
      const user = await deleteProfileValidator(id, next);

      if (user) {
        await user.remove();
        return res.status(200).json({ msg: "Account successfully deleted" });
      }
    } catch (error) {
      next(error);
    }
  },
  getChatWindows: async ({ cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);
      const { chatWindows } = await User.findById(id);

      return res.status(200).json(chatWindows);
    } catch (error) {
      next(error);
    }
  },
  setChatWindow: async ({ body, cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);
      const target = await chatWindowValidator(body, next);

      if (id && target) {
        const { chatWindows } = await User.findByIdAndUpdate(
          id,
          { $push: { chatWindows: target } },
          { new: true, fields: { _id: 0 } }
        );

        return res.status(200).json(chatWindows);
      }
    } catch (error) {
      next(error);
    }
  },
  deleteChatWindow: async ({ body: { id }, cookies: { token } }, res, next) => {
    try {
      const { id: userId } = await tokenValidator(token, next);

      if (userId) {
        const { chatWindows } = await User.findByIdAndUpdate(
          userId,
          { $pull: { chatWindows: { id } } },
          { new: true, fields: { _id: 0 } }
        );

        return res.status(200).json(chatWindows);
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
