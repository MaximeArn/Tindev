const applicantValidator = require("./applicantValidator");
const applyValidator = require("./applyValidator");
const registerValidator = require("./registerValidator");
const loginValidator = require("./loginValidator");
const projectValidator = require("./projectValidator");
const tokenValidator = require("./tokenValidator");
const searchValidator = require("./searchValidator");
const projectDeletionValidator = require("./projectDeletionValidator");
const projectUpdateValidator = require("./projectUpdateValidators");
const removeContributorValidator = require("./removeContributorValidator");
const userProfileValidator = require("./userProfileValidator");
const userUpdateValidator = require("./userUpdateValidator");
const deleteProfileValidator = require("./deleteProfileValidator");
const chatWindowValidator = require("./chatWindowValidator");
const verifyAccountValidator = require("./verifyAccountValidator");
const accountTokenValidator = require("./accountTokenValidator");
const activationLinkValidator = require("./activationLinkValidator");
const resetPasswordValidator = require("./resetPasswordValidator");

module.exports = {
  applicantValidator,
  applyValidator,
  registerValidator,
  loginValidator,
  projectValidator,
  tokenValidator,
  searchValidator,
  projectDeletionValidator,
  projectUpdateValidator,
  removeContributorValidator,
  userProfileValidator,
  userUpdateValidator,
  deleteProfileValidator,
  chatWindowValidator,
  verifyAccountValidator,
  accountTokenValidator,
  activationLinkValidator,
  resetPasswordValidator,
};
