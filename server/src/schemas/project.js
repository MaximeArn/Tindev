const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  author: String,
  title: String,
  description: String,
  //   contributors: [{ name: String }],
  avatar: String,
});

const Project = mongoose.model("Project", projectSchema);

const myProject = new Project({
  author: "moi",
  title: "mon title",
  description: "ok",
  avatar: "sisi",
});

console.log(myProject.author);
module.exports = projectSchema;
