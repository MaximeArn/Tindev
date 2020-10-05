const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  age: Number,
  city: String,
  role: String,
});

module.exports = userSchema;
