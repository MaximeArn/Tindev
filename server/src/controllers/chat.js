/** @format */

const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");

module.exports = {
  chatHandler: (ioNameSpace, socket, connectedUsers, username) => {
    socket.join(connectedUsers[username]);

    socket.on("chat-message", async ({ to, message, token }) => {
      try {
        const { id, username: from } = await tokenValidator(token, null);
        const { name: toName } = to;
        const date = Date.now();
        const user = await User.findOne({ _id: id });
        const msg = { from, fromId: id, to: toName, message, date };

        user.messages.push({ to, message, date });
        await user.save();

        ioNameSpace.in(connectedUsers[to.name]).emit("chat-message", msg);
        socket.emit("chat-message", msg);
      } catch (error) {
        console.log(error.message);
        throw new Error(error);
      }
    });
  },
};
