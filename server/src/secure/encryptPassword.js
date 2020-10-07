const bcrypt = require("bcrypt");

module.exports = async (body) =>
  (body.password = await bcrypt.hash(body.password, 10));
