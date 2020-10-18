/** @format */

const { ObjectId } = require("mongodb");
/** @format */

const { Schema } = require("mongoose");

const projectSchema = new Schema({
  author: String,
  title: String,
  description: String,
  contributors: [{ name: String, _id: ObjectId }],
  image: String,
  categories: [{ name: String, color: String }],
  applicants: [{ _id: ObjectId, username: String, message: String }],
  size: Number,
});

module.exports = projectSchema;
