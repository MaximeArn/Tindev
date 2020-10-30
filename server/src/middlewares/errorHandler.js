const errorHandler = ({ message, status }, req, res, next) => {
  console.error(message);
  return status
    ? res.status(status).json({ msg: message })
    : res.status(500).json({ msg: message });
};

module.exports = errorHandler;
