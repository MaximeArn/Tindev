const { model } = require("mongoose");
const userSchema = require("../schemas/user");

class User {
  getUsername() {
    return this.username;
  }
}
userSchema.loadClass(User);
module.exports = model("User", userSchema);
