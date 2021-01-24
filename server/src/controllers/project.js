const { Project } = require("../models");
const { setNotification } = require("./notifications");
const {
  projectValidator,
  applyValidator,
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
  getProjects: async (req, res, next) => {
    try {
      const projects = (await Project.find()).filter(
        ({ size, contributors }) => size > contributors.length
      );

      return res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },
  getProject: async ({ params: { name } }, res, next) => {
    try {
      const project = await Project.findOne({ title: name });
      return res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  },
  apply: async (sockets, { body, decoded: { id, username } }, res, next) => {
    try {
      const { owner, project } = await applyValidator({ body, id }, next);

      if (project) {
        const { _id, applicants } = project;
        const { message } = body;
        const tooltip = `${username} applied to your project`;
        setNotification(sockets, owner, tooltip, next);

        await Project.findByIdAndUpdate(_id, {
          applicants: [...applicants, { _id: id, username, message }],
        });

        return res.status(200).json({
          msg: "Thank you for your apply.",
        });
      }
    } catch (error) {
      next(error);
    }
  },
  acceptApplicant: async ({ body }, res, next) => {
    try {
      const { userId: _id, username } = body;
      const project = await applicantValidator(body, next);

      if (project) {
        project.applicants.pull(userId);
        project.contributors.push({
          _id,
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
    try {
      const { userId } = body || {};
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
  verifyOwner: async ({ body, decoded: { username } }, res, next) => {
    const { projectAuthor } = body;
    return res.status(200).json(projectAuthor === username);
  },
  deleteById: async ({ params: { id } }, res, next) => {
    try {
      const project = await projectDeletionValidator(id, next);

      if (project) {
        await project.deleteOne();
        return res.status(200).json({ msg: "Project successfully deleted" });
      }
    } catch (error) {
      next(error);
    }
  },
  updateById: async ({ body, params: { id }, file }, res, next) => {
    try {
      // const key = file ? "image" : Object.keys(body)[0];
      //TODO: VERIFY THAT THIS WORKS
      const update = file ? { image: file.filename } : body;
      const project = await projectUpdateValidator(id, body, next);

      if (project) {
        const updated = await Project.findByIdAndUpdate(id, update, { new: true });

        return res
          .status(200)
          .json({ msg: "Project successfully updated", project: updated });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteContributor: async (
    sockets,
    { body: { id }, decoded: { id: userId, username } },
    res,
    next
  ) => {
    try {
      const { project, user } = (await removeContributorValidator(id, next)) || {};
      const tooltip = `${username} has left your project ${project.title}`;

      if (project) {
        project.contributors.pull(userId);
        const updated = await project.save();
        setNotification(sockets, user, tooltip, next);
        return res.status(200).json(updated);
      }
    } catch (error) {
      next(error);
    }
  },
};
