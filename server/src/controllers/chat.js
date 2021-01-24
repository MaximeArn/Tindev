const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");
const { setNotification } = require("./notifications");
const chatPopUp = require("../utils/chatPopUp");

module.exports = {
  chatHandler: (ioNameSpace, socket, connectedUsers, username) => {
    const { id: room } = connectedUsers[username];

    socket.on("chat-message", async ({ to, message }) => {
      try {
        const { id, username: from } = socket.decoded;
        const { name: toName, id: toId } = to;
        const date = Date.now();
        const user = await User.findOne({ _id: id });
        const { socket: toSocket } = connectedUsers[toName];
        const notification = `${from} sent you a message`;
        const target = await User.findById(toId);

        !target.notifications.tooltips.find(({ tooltip }) => tooltip === notification) &&
          setNotification(connectedUsers, target, notification, null);

        !target.chatWindows.some(({ id: windowId }) => windowId == id) &&
          chatPopUp(connectedUsers[toName], toId, { id, username: from });

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

        [socket, toSocket].forEach((socket) => socket.join(room));
        ioNameSpace.in(room).emit("chat-message", msg);
      } catch (error) {
        throw new Error(error);
      }
    });
  },
};
