const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const tokenSchema = new Schema({
  userId: ObjectId,
  token: String,
});

module.exports = tokenSchema;
