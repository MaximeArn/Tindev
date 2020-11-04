const { tokenValidator } = require("../../utils/validators");

module.exports = async ({ handshake: { query } }, next) => {
  try {
    const { token } = query;
    const user = await tokenValidator(token, next);

    user && next();
  } catch (error) {
    next(error);
  }
};
