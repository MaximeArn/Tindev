/** @format */

const { Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    image: String,
    author: String,
    title: String,
    description: String,
    contributors: [{ name: String }],
    avatar: String,
  },
  { versionKey: false }
);

module.exports = projectSchema;
