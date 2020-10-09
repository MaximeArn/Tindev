/** @format */

const { Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    name: String,
    color: String,
  },
  { versionKey: false }
);

module.exports = categorySchema;
