/** @format */

const { Project } = require("../models");
const {
  projectValidator,
  applyValidator,
  tokenValidator,
  applicantValidator,
} = require("../utils/validators");

module.exports = {
  create: async ({ body, cookies: { token }, file }, res, next) => {
    const filename = file ? file.filename : null;
    try {
      const { username } = await tokenValidator(token, next);
      const valid = await projectValidator(body, next);

      if (valid && username) {
        await Project.create({
          ...valid,
          author: username,
          contributors: [],
          applicants: [],
          image: filename,
        });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
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
  apply: async ({ body, cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);
      const apply = await applyValidator({ body, id }, next);

      if (apply && id) {
        const { body: validatedBody, project } = apply;
        const {
          appliant: { username },
          message,
        } = validatedBody;

        await Project.updateOne(
          { _id: project._id },
          {
            applicants: [...project.applicants, { _id: id, username, message }],
          }
        );

        return res.status(200).json({
          msg: "Thank you for your apply.",
        });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  acceptApplicant: async ({ body }, res, next) => {
    const { userId, username } = body;
    try {
      const project = await applicantValidator(body, next);

      if (project) {
        project.applicants.pull(userId);
        project.contributors.push({
          _id: userId,
          username,
        });

        await project.save();
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  declineApplicant: async ({ body }, res, next) => {
    const { userId } = body;
    try {
      const project = await applicantValidator(body, next);

      if (project) {
        project.applicants.pull(userId);
        await project.save();
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};

