const { User } = require("../models");
const {
  userProfileValidator,
  userUpdateValidator,
  deleteProfileValidator,
  chatWindowValidator,
} = require("../utils/validators");

const usersController = {
  getUsers: async ({ decoded: { username } }, res, next) => {
    try {
      const users = await User.find({ username: { $ne: username } }, { password: 0 });
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
  getUserByUsername: async ({ params: { username } }, res, next) => {
    try {
      const user = await userProfileValidator({ username }, next);

      if (user) {
        return res.status(200).json(user);
      }
    } catch (error) {
      next(error);
    }
  },
  getMessageHistory: async ({ body: { toId }, decoded: { id: fromId } }, res, next) => {
    try {
      const fromUser = User.findById(fromId).sort({
        "messages.date": -1,
      });

      const toUser = User.findById(toId).sort({
        "messages.date": -1,
      });

      const [{ messages: fromMessages }, { messages: toMessages }] = await Promise.all([
        fromUser,
        toUser,
      ]);

      const sortedFromMessages = fromMessages.filter(({ to: { id } }) => id == toId);
      const sortedToMessages = toMessages.filter(({ to: { id } }) => id == fromId);

      return res.status(200).json({ to: sortedToMessages, from: sortedFromMessages });
    } catch (error) {
      next(error);
    }
  },
  update: async ({ body, fieldName, files, decoded: { id } }, res, next) => {
    try {
      const valid = await userUpdateValidator(body, next);
      if (valid) {
        const hasFile = Object.keys(files).length;
        const key = hasFile ? fieldName : Object.keys(body)[0];
        const user = await User.findByIdAndUpdate(
          id,
          { [key]: hasFile ? files[fieldName][0].filename : body[key] },
          { new: true, fields: { password: 0, messages: 0 } }
        );
        return res.status(200).json({ msg: "Profile successfully updated", user });
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
  getChatWindows: async ({ decoded: { id } }, res, next) => {
    try {
      const { chatWindows } = await User.findById(id);
      return res.status(200).json(chatWindows);
    } catch (error) {
      next(error);
    }
  },
  setChatWindow: async ({ body, decoded: { id } }, res, next) => {
    try {
      const target = await chatWindowValidator(body, next);

      if (target) {
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
  deleteChatWindow: async ({ body: { id }, decoded: { id: userId } }, res, next) => {
    try {
      const { chatWindows } = await User.findByIdAndUpdate(
        userId,
        { $pull: { chatWindows: { id } } },
        { new: true, fields: { _id: 0 } }
      );

      return res.status(200).json(chatWindows);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
