const errorHandler = (err, req, res, next) => {
  const { message, status } = err;
  return res.status(status).json({ msg: message });
};

module.exports = errorHandler;
