/** @format */

const { Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
});

module.exports = categorySchema;
