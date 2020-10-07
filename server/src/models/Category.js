/** @format */

const { model } = require("mongoose");
const projectSchema = require("../schemas/category");

class Category {
  getColor() {
    return this.color;
  }
}

projectSchema.loadClass(Category);
module.exports = model("Category", projectSchema);
