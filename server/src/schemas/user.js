const { ObjectId } = require("mongodb");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    firstname: String,
    lastname: String,
    email: { type: String, required: true },
    password: String,
    age: Number,
    city: String,
    suspended: {
      status: { type: Boolean, default: false },
      duration: { type: Schema.Types.Mixed, default: false },
    },
    role: { type: String, default: "User" },
    messages: [{ to: { id: ObjectId, name: String }, message: String, date: Date }],
    avatar: { type: String, default: "avatar-default.jpg" },
    background_image: { type: String, default: "user-background-image-default.jpg" },
    about: { type: String, default: "" },
    experience: { type: String, default: "" },
    technos: [String],
    chatWindows: [{ id: String, username: String }],
    notifications: {
      counter: { type: Number, default: 0 },
      tooltips: [{ tooltip: String, createdAt: Date }],
    },
    activated: { type: Boolean, default: false },
    expire_at: {
      type: Schema.Types.Mixed,
      default: Date.now,
      index: { expires: 60 * 60 * 24 },
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
