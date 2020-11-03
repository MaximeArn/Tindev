const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);

module.exports = {
  getMessage: (req, res, next) => {
    http.listen(SOCKET, () =>
      console.log(`Socket listening on port ${SOCKET}`)
    );

    io.of("/messages").on("connection", (socket) => {
      socket.on("hey", (message) => io.emit("hey", message));
    });
  },
};
