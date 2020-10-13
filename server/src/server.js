/** @format */

require("dotenv").config();
const express = require("express");
const server = require("express")();
const cookieParser = require("cookie-parser");
const authRouter = require("./router/auth");
const projectRouter = require("./router/project");
const { pageNotFound: notFound } = require("./middlewares/NotFound");
const mongoDB = require("./config/database");
const errorHandler = require("./middlewares/ProjectErrorHandler");
const cors = require("cors");
const corsSettings = require("./config/cors");

const PORT = process.env.PORT || 3000;

server.use(cors(corsSettings));
server.use(express.json());
server.use(cookieParser());
server.use("/auth", authRouter);
server.use("/project", projectRouter);
server.use(errorHandler);
server.use(notFound);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
