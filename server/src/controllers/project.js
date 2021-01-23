const { Project } = require("../models");
const { setNotification } = require("./notifications");
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
  create: async ({ body, decoded: { username }, file }, res, next) => {
    try {
      const filename = file ? file.filename : "image-default.jpeg";
      const valid = await projectValidator(body, next);

      if (valid) {
        const created = await Project.create({
          ...valid,
          author: username,
          image: filename,
        });

        return res.status(200).json(created);
      }
    } catch (error) {
      next(error);
    }
  },
  getProjects: async ({ cookies: { token } }, res, next) => {
    try {
      const { username } = await tokenValidator(token, next);

      if (username) {
        const projects = (await Project.find()).filter(
          ({ size, contributors }) => size > contributors.length
        );

        return res.status(200).json(projects);
      }
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
    try {
      const { id, username } = await tokenValidator(token, next);
      const { owner, project } = await applyValidator({ body, id }, next);

      if (project && id) {
        const { _id, applicants } = project;
        const { message } = body;
        const tooltip = `${username} applied to your project`;
        setNotification(sockets, owner, tooltip, next);

        await Project.findOneAndUpdate(
          { _id },
          {
            applicants: [...applicants, { _id: id, username, message }],
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
    const { userId } = body || {};
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
    const { username } = (await tokenValidator(token, next)) || {};
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
  updateById: async ({ body, params: { id }, cookies: { token }, file }, res, next) => {
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
  deleteContributor: async (sockets, { body: { id }, cookies: { token } }, res, next) => {
    try {
      const { id: userId, username } = (await tokenValidator(token, next)) || {};
      const { project, user } = (await removeContributorValidator(id, next)) || {};
      const tooltip = `${username} has left your project ${project.title}`;

      if (project && userId) {
        setNotification(sockets, user, tooltip, next);

        project.contributors.pull(userId);

        const updated = await project.save();

        return res.status(200).json(updated);
      }
    } catch (error) {
      next(error);
    }
  },
};
