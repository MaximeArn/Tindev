const bcrypt = require("bcrypt");

module.exports = async (password) => await bcrypt.hash(password, 10);
