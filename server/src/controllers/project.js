const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    const filename = req.file || null;
    const valid = await fieldValidator(req.body, next);

    valid && Project.create({ ...valid, contributors: [], image: filename });
  },
};
