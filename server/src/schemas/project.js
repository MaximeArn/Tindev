const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    author: String,
    title: String,
    description: String,
    contributors: [{ _id: ObjectId, username: String }],
    image: String,
    categories: [String],
    applicants: [{ _id: ObjectId, username: String, message: String }],
    size: Number,
  },
  { collation: { locale: "en", strength: 2 } }
);

module.exports = projectSchema;
