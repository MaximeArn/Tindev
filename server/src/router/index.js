const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const projectRouter = require("./project");
const usersRouter = require("./users");
const searchRouter = require("./search");
const messagesRouter = require("./messages");

module.exports = {
  authRouter,
  categoriesRouter,
  messagesRouter,
  projectRouter,
  usersRouter,
  searchRouter,
};
