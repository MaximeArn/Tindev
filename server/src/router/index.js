const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const projectRouter = require("./project");
const usersRouter = require("./users");
const searchRouter = require("./search");
const notificationsRouter = require("./notifications");

module.exports = {
  authRouter,
  categoriesRouter,
  projectRouter,
  usersRouter,
  searchRouter,
  notificationsRouter,
};
