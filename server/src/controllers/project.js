/** @format */

const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");
const applyValidator = require("../utils/applyValidator");

module.exports = {
  create: async (req, res, next) => {
    const filename = req.file ? req.file.filename : null;
    const valid = await fieldValidator(req.body, next);

    valid &&
      Project.create({
        ...valid,
        contributors: [],
        applicant: [],
        image: filename,
      });
  },
  getProjects: async (req, res, next) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  apply: async (req, res, next) => {
    try {
      const apply = await applyValidator(req.body, next);

      if (apply) {
        const { body, project } = apply;
        // Project.updateOne({_id: })
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
