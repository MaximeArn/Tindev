const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const tokenSchema = new Schema({
  userId: ObjectId,
  token: String,
  expire: Number,
  delete_at: {
    type: Date,
    default: Date.now,
    index: { expires: 60 * 60 * 24 },
  },
});

module.exports = tokenSchema;
