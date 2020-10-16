const ApplyError = require("../utils/CustomError");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../config/sanitize");

module.exports = (body, next) => {
  const { appliant, message } = body;
  try {
    if (!appliant) throw new ApplyError("User not found", 400);
    body.message = sanitize(message, sanitizeConfig);
    return body;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
