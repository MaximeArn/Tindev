const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: (req, res, next) => {
    const { filename } = req.file;

    const valid = fieldValidator(req.body, next);

    // valid && Project.create({ ...req.body, image: filename });
  },
};
