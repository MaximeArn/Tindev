/** @format */

const { Project } = require("../models");
const fieldValidator = require("../utils/validators/projectFieldValidator");
const applyValidator = require("../utils/validators/applyValidator");
const tokenValidator = require("../utils/validators/tokenValidator");

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
    const { token } = req.cookies;
    try {
      const tokenCredentials = await tokenValidator(token, next);
      const apply = await applyValidator(req.body, next);

      if (apply && tokenCredentials) {
        const { id } = tokenCredentials;
        const { body, project } = apply;
        const {
          appliant: { username },
          message,
        } = body;

        await Project.updateOne(
          { _id: project._id },
          {
            applicant: [...project.applicant, { _id: id, username, message }],
          }
        );

        return res.status(200).json({
          msg: "Thank you for your apply. We will be in touch with you soon.",
        });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
