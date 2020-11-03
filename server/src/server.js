/** @format */

require("dotenv").config();
const express = require("express");
const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);
const cookieParser = require("cookie-parser");
const notFound = require("./middlewares/NotFound");
const errorHandler = require("./middlewares/errorHandler");
const mongoDB = require("./config/database");
const cors = require("cors");
const corsSettings = require("./config/cors");
const {
  authRouter,
  usersRouter,
  categoriesRouter,
  projectRouter,
  searchRouter,
  messagesRouter,
} = require("./router");

const PORT = process.env.PORT || 3000;
const SOCKET = process.env.SOCKET || 3001;

server.use(cors(corsSettings));
server.use(express.static(`${__dirname}/public`));
server.use(express.json());
server.use(cookieParser());
server.use("/auth", authRouter);
server.use("/project", projectRouter);
server.use("/categories", categoriesRouter);
server.use("/users", usersRouter);
server.use("/search", searchRouter);
// server.use("/messages", messagesRouter);
server.use(errorHandler);
server.use(notFound);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
http.listen(SOCKET, () => console.log(`Socket listening on port ${SOCKET}`));

io.of("/messages").on("connection", (socket) => {
  console.log("USER CONNECTED");
  socket.on("chat-message", (message) => io.emit("hey", message));
});
