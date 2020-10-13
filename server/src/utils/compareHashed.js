const bcrypt = require("bcrypt");

module.exports = async (plainPassword, hashedPassword) =>
  await bcrypt.compare(plainPassword, hashedPassword);
