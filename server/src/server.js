require("dotenv").config();
const express = require("express");
const server = require("express")();
const authRouter = require("./router/auth");
const { pageNotFound: notFound } = require("./middlewares/NotFound");

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use("/auth", authRouter);
server.use(notFound);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
