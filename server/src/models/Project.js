const { model } = require("mongoose");
const projectSchema = require("../schemas/project");

class Project {
  getAuthor() {
    return this.author;
  }
}

projectSchema.loadClass(Project);
module.exports = model("Project", projectSchema);
