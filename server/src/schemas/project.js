const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  image: String,
  author: String,
  title: String,
  description: String,
  contributors: [{ name: String }],
  avatar: String,
});

module.exports = projectSchema;
