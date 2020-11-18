const errorHandler = (error, req, res, next) => {
  console.error(error);
  const { message, status } = error;
  return status
    ? res.status(status).json({ msg: message })
    : res.status(500).json({ msg: message });
};

module.exports = errorHandler;
