const router = require("express").Router();
const { deleteProject, expellUser } = require("../controllers/admin");

const adminRouterWrapper = (connectedUsers) => {
  router.delete("/project/:id", deleteProject);
  router.patch("/user/:id", (req, res, next) => {
    expellUser(req, res, next, connectedUsers);
  });
};

module.exports = adminRouterWrapper;
