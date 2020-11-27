const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");

module.exports = {
  notifications: async ({ cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);

      if (id) {
        const {
          notifications: { tooltips, counter },
        } = await User.findById(id, {
          notifications: 1,
        });

        return res.status(200).json({
          counter,
          tooltips: tooltips.sort(
            ({ createdAt: createdAt1 }, { createdAt: createdAt2 }) =>
              createdAt1 > createdAt2 ? -1 : 1
          ),
        });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteNotification: async (
    { params: { id }, cookies: { token } },
    res,
    next
  ) => {
    try {
      const { id: userId } = await tokenValidator(token, next);

      if (userId) {
        const user = await User.findById(userId);
        const {
          notifications: { tooltips },
        } = user;

        user.notifications.tooltips = tooltips.filter(
          ({ _id }) => !(_id == id)
        );

        const { notifications } = await user.save();

        return res.status(200).json(notifications);
      }
    } catch (error) {
      next(error);
    }
  },
  setNotification: async (sockets, owner, tooltip, next) => {
    console.log("SET NOTIFICATION CONTROLLER MEHOD CALLED");
    try {
      let { counter, tooltips } = owner.notifications;
      tooltips.unshift({ tooltip, createdAt: Date.now() });

      owner.notifications = { counter: ++counter, tooltips };

      const { notifications, username } = await owner.save();

      sockets[username].socket.emit("notification", notifications);
    } catch (error) {
      if (!next) throw new Error(error);
      next(error);
    }
  },
};
