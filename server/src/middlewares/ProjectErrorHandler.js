const errorHandler = (err, req, res, next) => {
  const {
    error: { message },
    status,
  } = err;
  return res.status(status).json({ msg: message });
};

module.exports = errorHandler;
