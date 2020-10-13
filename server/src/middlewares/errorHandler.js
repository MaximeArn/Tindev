const errorHandler = (err, req, res, next) => {
  const { message, status } = err;
  return status
    ? res.status(status).json({ msg: message })
    : res.status(500).json({ msg: message });
};

module.exports = errorHandler;
