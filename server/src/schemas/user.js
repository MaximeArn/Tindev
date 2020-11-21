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
    notifications: { counter: Number, tooltips: [String] },
  },
  { collation: { locale: "en", strength: 2 } }
);

module.exports = userSchema;
