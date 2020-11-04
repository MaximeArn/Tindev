/** @format */

export default (chatWindow: { username: string }[], usernameToDelete: string) =>
  chatWindow.filter(({ username }) => username !== usernameToDelete);
