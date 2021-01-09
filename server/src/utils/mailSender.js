const accountActivationEmail = require("./sendAccountConfirmationEmail");
const resetPasswordEmail = require("./sendResetPasswordEmail");

module.exports = async (email, token, type) => {
  try {
    return type === "accountActivation"
      ? await accountActivationEmail(email, token)
      : await resetPasswordEmail(email, token);
  } catch (error) {
    console.error(error);
  }
};
