require("dotenv").config();
const express = require("express");
const server = express();
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
const adminMiddleware = require("./middlewares/admin");
const tokenVerification = require("./middlewares/tokenVerification");
const {
  authRouterWrapper,
  usersRouter,
  categoriesRouter,
  projectRouterWrapper,
  searchRouter,
  notificationsRouter,
  adminRouterWrapper,
  authorizationRouter,
} = require("./router");

const ioNameSpace = io.of("/chat");
const connectedUsers = {};

server.use(cors(corsSettings));
server.use(express.static(`${__dirname}/public`));
server.use(express.json());
server.use(cookieParser());
server.use(tokenVerification);
server.use("/verification", authorizationRouter);
server.use("/auth", authRouterWrapper(connectedUsers));
server.use("/project", projectRouterWrapper(connectedUsers));
server.use("/categories", categoriesRouter);
server.use("/users", usersRouter);
server.use("/search", searchRouter);
server.use("/notifications", notificationsRouter);
server.use("/admin", adminMiddleware, adminRouterWrapper(connectedUsers));
server.use(errorHandler);
server.use(notFound);

ioNameSpace.use(socketConnection).on("connection", (socket) => {
  console.log("connected");
  const {
    decoded: { username },
    conn: { id },
  } = socket;

  connectedUsers[username] = { id, socket };
  chatHandler(ioNameSpace, socket, connectedUsers, username);
});

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

module.exports = { server, http };

const fieldName = "avatar";

const name = `avatar-${
  fieldName === "background_image" ? "background-image-" : ""
}${Date.now()}.jpg`;
console.log(name);
