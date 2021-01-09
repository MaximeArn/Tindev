const UserError = require("../CustomError");
const compare = require("../comparePasswords");
const hash = require("../hashPassword");

module.exports = async (credentials, next) => {
  try {
    if (!compare(credentials)) {
      throw new UserError("Passwords do not match", 400);
    }

    return await hash(credentials.password);
  } catch (error) {
    next(error);
  }
};
