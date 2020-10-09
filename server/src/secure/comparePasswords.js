module.exports = (body) => {
  const isMatching = body.password === body.confirmPassword;
  delete body.confirmPassword;
  return isMatching;
};
