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
    suspended: {
      status: { type: Boolean, default: false },
      duration: { type: Schema.Types.Mixed, default: false },
    },
    role: { type: String, default: "User" },
    messages: [{ to: { id: ObjectId, name: String }, message: String, date: Date }],
    avatar: String,
    about: String,
    experience: String,
    technos: [String],
    chatWindows: [{ id: String, username: String }],
    notifications: {
      counter: { type: Number, default: 0 },
      tooltips: [{ tooltip: String, createdAt: Date }],
    },
    activated: { type: Boolean, default: false },
    expire_at: {
      type: Date,
      default: Date.now,
      index: { expires: 60 * 60 * 24 },
    },
  },
  { collation: { locale: "en", strength: 2 }, timestamps: true }
);

module.exports = userSchema;
