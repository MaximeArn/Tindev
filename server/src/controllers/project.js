const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    // const { filename } = req.file;
    const valid = await fieldValidator(req.body, next);
    // valid && Project.create({ ...req.body, image: filename, categories: [] });
  },
};
