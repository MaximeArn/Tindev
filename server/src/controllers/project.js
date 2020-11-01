/** @format */

const { Project } = require("../models");
const {
  projectValidator,
  applyValidator,
  tokenValidator,
  applicantValidator,
  projectDeletionValidator,
  projectUpdateValidator,
} = require("../utils/validators");

module.exports = {
  create: async ({ body, cookies: { token }, file }, res, next) => {
    const filename = file ? file.filename : "image-default.jpeg";
    try {
      const { username } = await tokenValidator(token, next);
      const valid = await projectValidator(body, next);
      if (valid && username) {
        const created = await Project.create({
          ...valid,
          author: username,
          contributors: [],
          applicants: [],
          image: filename,
        });
        return created && res.status(200).json(created);
      }
    } catch (error) {
      next(error);
    }
  },
  getProjects: async (req, res, next) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },
  apply: async ({ body, cookies: { token } }, res, next) => {
    try {
      const { id, username } = await tokenValidator(token, next);
      const apply = await applyValidator({ body, id }, next);

      if (apply && id) {
        const { body: validatedBody, project } = apply;
        const { message } = validatedBody;

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

        const updated = await project.save();
        return res.status(200).json(updated);
      }
    } catch (error) {
      next(error);
    }
  },
  declineApplicant: async ({ body }, res, next) => {
    const { userId } = body;
    try {
      const project = await applicantValidator(body, next);

      if (project) {
        project.applicants.pull(userId);
        const updated = await project.save();
        return res.status(200).json(updated);
      }
    } catch (error) {
      next(error);
    }
  },
  verifyOwner: async ({ body, cookies: { token } }, res, next) => {
    const { projectAuthor } = body;
    const { username } = await tokenValidator(token, next);
    return username && res.status(200).json(projectAuthor === username);
  },
  deleteById: async ({ params: { id }, cookies: { token } }, res, next) => {
    try {
      const user = await tokenValidator(token, next);
      const project = await projectDeletionValidator(id, next);

      if (project && user) {
        await project.deleteOne();
        return res.status(200).json({ msg: "Project successfully deleted" });
      }
    } catch (error) {
      next(error);
    }
  },
  updateById: async (
    { body, params: { id }, cookies: { token }, file },
    res,
    next
  ) => {
    console.log(body);
    try {
      const key = file ? "image" : Object.keys(body)[0];
      const user = await tokenValidator(token, next);
      const project = await projectUpdateValidator(id, body, next);

      if (project && user) {
        await Project.updateOne(
          { _id: id },
          { [key]: body[key] || file.filename }
        );

        return res.status(200).json({ msg: "Project successfully updated" });
      }
    } catch (error) {
      next(error);
    }
  },
};
