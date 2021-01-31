const { User } = require("../models");

module.exports = {
  notifications: async ({ decoded: { id } }, res, next) => {
    try {
      const {
        notifications: { tooltips, counter },
      } = await User.findById(id, {
        notifications: 1,
      });

      return res.status(200).json({
        counter,
        tooltips: tooltips.sort(({ createdAt: createdAt1 }, { createdAt: createdAt2 }) =>
          createdAt1 > createdAt2 ? -1 : 1
        ),
      });
    } catch (error) {
      next(error);
    }
  },
  deleteNotification: async ({ params: { id }, decoded: { id: userId } }, res, next) => {
    try {
      const user = await User.findById(userId);
      user.notifications.tooltips.pull(id);

      const { notifications } = await user.save();
      return res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  },
  setNotification: async (sockets, owner, tooltip, next) => {
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
  reset: async ({ decoded: { id } }, res, next) => {
    try {
      const user = await User.findById(id);
      const { tooltips } = user.notifications;

      user.notifications = { counter: 0, tooltips };
      const { notifications } = await user.save();

      return res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  },
  notifyProjectOwner: (socket, project) => {
    socket.emit("project-ownership", project);
  },
};
