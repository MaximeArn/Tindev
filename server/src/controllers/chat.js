const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");
const { setNotification } = require("./notifications");
const chatPopUp = require("../utils/chatPopUp");

module.exports = {
  chatHandler: (ioNameSpace, socket, connectedUsers, username) => {
    const { id: socketId } = connectedUsers[username];
    socket.join(socketId);

    socket.on("chat-message", async ({ to, message, token }) => {
      try {
        const { id, username: from } = await tokenValidator(token, null);
        const { name: toName, id: toId } = to;
        const date = Date.now();
        const user = await User.findOne({ _id: id });
        const { id: room } = connectedUsers[toName];
        const notification = `${from} sent you a message`;
        const target = await User.findById(toId);

        !target.notifications.tooltips.find(
          ({ tooltip }) => tooltip === notification
        ) && setNotification(connectedUsers, target, notification, null);

        !target.chatWindows.some(({ id: windowId }) => windowId == id) &&
          chatPopUp(connectedUsers[toName], target, { id, username: from });

        user.messages.push({ to, message, date });
        await user.save();

        const msg = {
          id: user.messages.slice(-1).pop()._id,
          from,
          fromId: id,
          to: toName,
          message,
          date,
        };

        ioNameSpace.in(room).emit("chat-message", msg);
        socket.emit("chat-message", msg);
      } catch (error) {
        throw new Error(error);
      }
    });
  },
};
