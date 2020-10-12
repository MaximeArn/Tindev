const { Project } = require("../models");

module.exports = {
  create: (req, res) => {
    console.log("project creation controller called");
    console.log(req.body);
  },
};
