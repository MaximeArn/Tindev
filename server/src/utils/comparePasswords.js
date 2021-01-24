const hash = require("./hashPassword");

module.exports = async (body) => {
  const isMatching = body.password === body.confirmPassword;
  delete body.confirmPassword;

  if (isMatching) {
    body.password = await hash(body.password);
  }

  return isMatching;
};
