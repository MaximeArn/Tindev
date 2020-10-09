/** @format */

const { model } = require("mongoose");
const categorySchema = require("../schemas/category");

class Category {
  getColor() {
    return this.color;
  }
}

categorySchema.loadClass(Category);
module.exports = model("Category", categorySchema);
