const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    let filename;
    req.file ? (filename = req.file) : (filename = null);

    const valid = await fieldValidator(req.body, next);
    valid && Project.create({ ...valid, contributors: [], image: filename });
  },
};
