const { ObjectId } = require("mongodb");
/** @format */

const { Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    author: String,
    title: String,
    description: String,
    contributors: [{ name: String }],
    image: String,
    category: ObjectId,
  },
  { versionKey: false }
);

module.exports = projectSchema;
