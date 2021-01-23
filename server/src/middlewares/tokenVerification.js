const notProtectedPaths = ["/admin", "/auth"];

module.exports = ({ path }, res, next) => {
  //TODO: find regex way to match the paths and next / call tokenvalidator accordingly
};
