/** @format */

const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");
const applicantValidator = require("../utils/applicantValidator");

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
  getAllProjects: async (req, res, next) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  addApplicant: async ({ body }, res, next) => {
    try {
      const project = await applicantValidator(body, next);
      if (project) {
        const { username } = project.applicant.find(
          ({ username }) => username === body.applicant
        );
        const applicants = project.applicant.filter(
          ({ username }) => username !== body.applicant
        );
        project.applicant = applicants;
        console.log("CONTRIBUTORS", typeof project.contributors);
        project.contributors.push({
          name: username,
        });
        await Project.findOneAndUpdate({ _id: project._id }, project);
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
