/** @format */

const { Project } = require("../models");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../config/sanitize");
const fieldValidator = require("../utils/projectFieldValidator");

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
    console.log(req.body);
    console.log(sanitize(req.body.message, sanitizeConfig));
  },
};
