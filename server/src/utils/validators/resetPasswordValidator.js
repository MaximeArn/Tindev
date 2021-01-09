const UserError = require("../CustomError");
const compare = require("../comparePasswords");
const { Token, User } = require("../../models");
const hash = require("../hashPassword");

module.exports = async (credentials, next) => {
  try {
    const token = await Token.findOne({ token: credentials.token });
    const user = await User.findById(token.userId);

    if (!token || !user) {
      throw new UserError("This token is invalid", 400);
    }

    if (Date.now() > token.expire) {
      await token.remove();
      throw new UserError(
        "This token has expired, please send a new link to continue",
        403
      );
    }

    if (!compare(credentials)) {
      throw new UserError("Passwords do not match", 400);
    }

    await token.remove();

    return { password: await hash(credentials.password), userId: user["_id"] };
  } catch (error) {
    next(error);
  }
};
