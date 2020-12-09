module.exports = async ({ socket }, target, chatWindow) => {
  target.chatWindows.push(chatWindow);
  const { chatWindows } = await target.save();

  return socket.emit("chat-popup", chatWindows);
};
