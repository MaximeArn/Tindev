/** @format */

const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: (req, res, next) => {
    const { filename } = req.file;
    const valid = fieldValidator(req.body, next);
    // valid && Project.create({ ...req.body, image: filename, categories: [] });
  },
  getAllProjects: async (req, res, next) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (err) {
      console.error(err);
      next(error);
    }
  },
};
