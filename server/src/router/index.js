const authRouterWrapper = require("./auth");
const categoriesRouter = require("./categories");
const projectRouterWrapper = require("./project");
const usersRouter = require("./users");
const searchRouter = require("./search");
const notificationsRouter = require("./notifications");
const adminRouterWrapper = require("./admin");
const authorizationRouter = require("./authorization");

module.exports = {
  authRouterWrapper,
  categoriesRouter,
  projectRouterWrapper,
  usersRouter,
  searchRouter,
  notificationsRouter,
  adminRouterWrapper,
  authorizationRouter,
};
