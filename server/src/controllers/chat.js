const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");

module.exports = {
  chatHandler: (ioNameSpace, socket, connectedUsers) => {
    socket.on("chat-message", async ({ to, message, token }) => {
      try {
        const { id } = await tokenValidator(token, null);
        const date = Date.now();
        const user = await User.findOne({ _id: id });
        user.messages.push({ to, message, date });
        await user.save();

        [socket, connectedUsers[to.name]].forEach((socket) =>
          socket.emit("chat-message", { message, date })
        );
      } catch (error) {
        throw new Error(error);
      }
    });
  },
};