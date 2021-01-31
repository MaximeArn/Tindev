const { Project } = require("../models");
const { setNotification, notifyProjectOwner } = require("./notifications");
const {
  projectValidator,
  applyValidator,
  applicantValidator,
  projectDeletionValidator,
  projectUpdateValidator,
  removeContributorValidator,
  projectDetailValidator,
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
  getProject: async ({ params }, res, next) => {
    try {
      const project = await projectDetailValidator(params, next);

      if (project) {
        return res.status(200).json(project);
      }
    } catch (error) {
      next(error);
    }
  },
  apply: async (sockets, { body, decoded: { id, username } }, res, next) => {
    try {
      const { owner, project } = (await applyValidator({ body, id }, next)) || {};

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
        project.applicants.pull(_id);
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
  updateById: async (
    connectedUsers,
    { body, params: { id }, file, decoded: { id: _id, username } },
    res,
    next
  ) => {
    try {
      const valid = await projectUpdateValidator(id, body, next);

      const condition = body.author
        ? { _id: id, "contributors.username": body.author }
        : { _id: id };

      const update = file
        ? { image: file.filename }
        : body.author
        ? {
            $set: {
              "contributors.$.username": username,
              "contributors.$._id": _id,
              author: body.author,
            },
          }
        : body;

      if (valid) {
        const project = await Project.findOneAndUpdate(condition, update, {
          new: true,
        });

        body.author && notifyProjectOwner(connectedUsers[body.author]);

        return res
          .status(200)
          .json({ message: "Project successfully updated", project, username });
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
