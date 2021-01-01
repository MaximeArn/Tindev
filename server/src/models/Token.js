const { model } = require("mongoose");
const tokenSchema = require("../schemas/token");

class Token {
  getToken() {
    return this.token;
  }
}

tokenSchema.loadClass(Token);
module.exports = model("Token", tokenSchema);
