/** @format */

require("dotenv").config();
const express = require("express");
const server = require("express")();
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
} = require("./router");

const PORT = process.env.PORT || 3000;

server.use(cors(corsSettings));
server.use(express.static(`${__dirname}/public`));
server.use(express.json());
server.use(cookieParser());
server.use("/auth", authRouter);
server.use("/project", projectRouter);
server.use("/categories", categoriesRouter);
server.use("/users", usersRouter);
server.use("/search", searchRouter);
server.use(errorHandler);
server.use(notFound);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
