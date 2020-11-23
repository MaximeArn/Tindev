const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    age: Number,
    city: String,
    role: String,
    project: ObjectId,
    messages: [
      { to: { id: ObjectId, name: String }, message: String, date: Date },
    ],
    avatar: String,
    about: String,
    experience: String,
    notifications: {
      counter: { type: Number, default: 0 },
      tooltips: [{ tooltip: String, createdAt: Date }],
    },
  },
  { collation: { locale: "en", strength: 2 }, timestamps: true }
);

module.exports = userSchema;
