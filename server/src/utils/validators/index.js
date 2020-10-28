/** @format */

const applicantValidator = require("./applicantValidator");
const applyValidator = require("./applyValidator");
const registerValidator = require("./registerValidator");
const loginValidator = require("./loginValidator");
const projectValidator = require("./projectValidator");
const tokenValidator = require("./tokenValidator");
const userValidator = require("./userValidator");
const searchValidator = require("./searchValidator");
const projectDeletionValidator = require("./projectDeletionValidator");
const projectUpdateValidator = require("./projectUpdateValidators");

module.exports = {
  applicantValidator,
  applyValidator,
  registerValidator,
  loginValidator,
  projectValidator,
  tokenValidator,
  userValidator,
  searchValidator,
  projectDeletionValidator,
  projectUpdateValidator,
};
