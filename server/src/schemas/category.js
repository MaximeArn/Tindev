/** @format */

const { Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  color: String,
});

module.exports = categorySchema;
