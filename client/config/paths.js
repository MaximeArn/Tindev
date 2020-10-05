/** @format */

const path = require("path");
console.log(__dirname);
module.exports = {
  src: path.resolve(__dirname, "../src"),
  assets: path.resolve(__dirname, "../src/assets"),
  build: path.resolve(__dirname, "../dist"),
  static: path.resolve(__dirname, "../public"),
};
