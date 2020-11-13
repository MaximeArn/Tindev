/** @format */

const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");

module.exports = {
  chatHandler: (ioNameSpace, socket, connectedUsers, username) => {
    const { id: socketId } = connectedUsers[username];
    socket.join(socketId);

    socket.on("chat-message", async ({ to, message, token }) => {
      try {
        const { id, username: from } = await tokenValidator(token, null);
        const { name: toName } = to;
        const date = Date.now();
        const user = await User.findOne({ _id: id });
        const { id: room } = connectedUsers[to.name];

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
        console.log(error.message);
        throw new Error(error);
      }
    });
  },
};
