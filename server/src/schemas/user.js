const { ObjectId } = require("mongodb");
/** @format */

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
  project: ObjectId,
});

module.exports = userSchema;
