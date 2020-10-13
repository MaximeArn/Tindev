const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");
const ProjectError = require("../utils/ProjectError");

module.exports = {
  create: async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    try {
      const { title, description, category, size } = req.body;
      if (!title) throw new ProjectError("No Project title provided", 400);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
