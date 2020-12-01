const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  author: String,
  content: String,
});

module.exports = messageSchema;
