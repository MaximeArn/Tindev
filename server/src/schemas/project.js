const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    author: String,
    title: String,
    description: String,
    contributors: { type: [{ _id: ObjectId, username: String }], default: [] },
    image: String,
    categories: [String],
    applicants: {
      type: [{ _id: ObjectId, username: String, message: String }],
      default: [],
    },
    size: Number,
  },
  { collation: { locale: "en", strength: 2 } }
);

module.exports = projectSchema;
