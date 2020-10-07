/** @format */

require("dotenv").config();
const express = require("express");
const server = require("express")();
const authRouter = require("./router/auth");
const { pageNotFound: notFound } = require("./middlewares/NotFound");
const mongoDB = require("./config/database");
const User = require("./models/User");
const Project = require("./models/Project");
const Category = require("./models/Category");
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use("/auth", authRouter);
server.use(notFound);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
