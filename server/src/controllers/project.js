const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    let filename;
    if (req.file) filename = req.file.filename;

    const valid = await fieldValidator(req.body, next);

    return valid && filename
      ? Project.create({ ...valid, contributors: [], image: filename })
      : valid
      ? Project.create({ ...valid, contributors: [], image: null })
      : null;
  },
};
