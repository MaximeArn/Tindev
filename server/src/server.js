require("dotenv").config();
const express = require("express");
const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http, { cookie: false });
const cookieParser = require("cookie-parser");
const notFound = require("./middlewares/NotFound");
const errorHandler = require("./middlewares/errorHandler");
const socketConnection = require("./middlewares/socket/socketConnection");
const { chatHandler } = require("./controllers/chat");
const mongoDB = require("./config/database");
const cors = require("cors");
const corsSettings = require("./config/cors");
const { SHA256, AES, enc } = require("crypto-js");
const { createTransport } = require("nodemailer");
const {
  authRouter,
  usersRouter,
  categoriesRouter,
  projectRouter,
  searchRouter,
  notificationsRouter,
} = require("./router");

const PORT = process.env.PORT || 7000;
const SOCKET = process.env.SOCKET || 6000;
const ioNameSpace = io.of("/chat");
const connectedUsers = {};

server.use(cors(corsSettings));
server.use(express.static(`${__dirname}/public`));
server.use(express.json());
server.use(cookieParser());
server.use("/auth", authRouter(connectedUsers));
server.use("/project", projectRouter(connectedUsers));
server.use("/categories", categoriesRouter);
server.use("/users", usersRouter);
server.use("/search", searchRouter);
server.use("/notifications", notificationsRouter);
server.use(errorHandler);
server.use(notFound);

ioNameSpace.use(socketConnection).on("connection", (socket) => {
  console.log("connected");
  const { username } = socket.handshake.query;
  const { id } = socket.conn;
  connectedUsers[username] = { id, socket };

  chatHandler(ioNameSpace, socket, connectedUsers, username);
});

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
http.listen(SOCKET, () => console.log(`Socket listening on port ${SOCKET}`));

console.log(Date.now().toString());
