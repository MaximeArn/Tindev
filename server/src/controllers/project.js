/** @format */

const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    const filename = req.file ? req.file.filename : null;

    const valid = await fieldValidator(req.body, next);

    valid &&
      Project.create({
        ...valid,
        contributors: [],
        image: filename,
      });
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
