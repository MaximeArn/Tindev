const { User } = require("../models");

module.exports = async ({ socket }, targetId, chatWindow) => {
  const { chatWindows } = await User.findByIdAndUpdate(
    targetId,
    { $push: { chatWindows: chatWindow } },
    { new: true, fields: { _id: 0 } }
  );

  return socket.emit("chat-popup", chatWindows);
};
