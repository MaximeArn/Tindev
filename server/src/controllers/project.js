/** @format */

const { Project } = require("../models");
const {
  projectValidator,
  applyValidator,
  tokenValidator,
  applicantValidator,
  projectDeletionValidator,
  projectUpdateValidator,
  removeContributorValidator,
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
  getProject: async ({ params: { name }, cookies: { token } }, res, next) => {
    try {
      const user = await tokenValidator(token, next);
      if (user) {
        const project = await Project.findOne({ title: name });
        return res.status(200).json(project);
      }
    } catch (error) {
      next(error);
    }
  },
  apply: async (sockets, { body, cookies: { token } }, res, next) => {
    console.log("APPLY METHOD CALLED");
    try {
      const { id, username } = await tokenValidator(token, next);
      const apply = await applyValidator({ body, id }, next);

      if (apply && id) {
        const { body: validatedBody, project } = apply;
        const { message } = validatedBody;

        const { author: owner } = await Project.findOneAndUpdate(
          { _id: project._id },
          {
            applicants: [...project.applicants, { _id: id, username, message }],
          },
          { new: true, fields: { author: 1 } }
        );

        sockets[owner].socket.emit(
          "notification",
          "Someone applied to your project"
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
    try {
      const key = file ? "image" : Object.keys(body)[0];
      const user = await tokenValidator(token, next);
      const project = await projectUpdateValidator(id, body, next);

      if (project && user) {
        const updated = await Project.findOneAndUpdate(
          { _id: id },
          { [key]: body[key] || file.filename },
          { new: true }
        );

        return res
          .status(200)
          .json({ msg: "Project successfully updated", project: updated });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteContributor: async (
    { body: { id }, cookies: { token } },
    res,
    next
  ) => {
    try {
      const { id: userId } = await tokenValidator(token, next);
      const project = await removeContributorValidator(id, next);

      if (project && userId) {
        project.contributors.pull(userId);
        const updated = await project.save();

        return res.status(200).json(updated);
      }
    } catch (error) {
      next(error);
    }
  },
};
