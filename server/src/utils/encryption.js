const SECRET = process.env.SECRET;
const { encrypt } = require("crypto-js/aes");

module.exports = (string) =>
  encrypt(string, SECRET)
    .toString()
    .replace(/[^a-zA-Z0-9]/g, "");
