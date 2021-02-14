const { ObjectId } = require("mongodb");
const {
  Types: { Mixed },
} = require("mongoose").Schema;

const userSchema = new Schema(
  {
    username: { type: String, required },
    firstname: String,
    lastname: String,
    email: { type: String, required },
    password: String,
    age: Number,
    city: String,
    suspended: {
      status: { type: Boolean, default: false },
      duration: { type: Mixed, default: false },
    },
    role: { type: String, default: "User" },
    messages: [{ to: { id: ObjectId, name: String }, message: String, date: Date }],
    avatar: { type: String, default: "default-image.jpg" },
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
      type: Mixed,
      default: Date.now,
      index: { expires: 60 * 60 * 24 },
    },
  },
  { collation: { locale: "en", strength: 2 }, timestamps: true }
);

module.exports = userSchema;
