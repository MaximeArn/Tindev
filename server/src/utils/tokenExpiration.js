module.exports = (duration) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + duration);
  return date;
};
