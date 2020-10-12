const { Project } = require("../models");
const fs = require("fs");

module.exports = {
  create: (req, res) => {
    console.log("project creation controller called");
    console.log(req.file);
  },
};
