const { Project } = require("../models");
const fs = require("fs");

module.exports = {
  create: (req, res) => {
    console.log("project creation controller called");
    console.log(req.body);
    console.log(req.file);
    fs.readFile(req.file.buffer, (err, data) => {
      err && console.log(err);
      data && console.log(data);
    });
  },
};
