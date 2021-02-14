module.exports = (user, next) => {
  if (user.suspended.status) {
    //TODO: user account suspension checks, inspire from loginvalidator with maybe a few changes
  }
};
