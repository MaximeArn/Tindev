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
const removeContributorValidator = require("./removeContributorValidator");
const userProfileValidator = require("./userProfileValidator");
const userUpdateValidator = require("./userUpdateValidator");
const deleteProfileValidator = require("./deleteProfileValidator");

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
  removeContributorValidator,
  userProfileValidator,
  userUpdateValidator,
  deleteProfileValidator,
};
