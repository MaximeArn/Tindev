const { User, Project } = require("../models");
const { projectDeletionValidator } = require("../utils/validators/");

module.exports = {
  deleteProject: async ({ params: { id } }, res, next) => {
    try {
      const project = await projectDeletionValidator(id, next);

      if (project) {
        await project.remove();

        return res
          .status(200)
          .json({ message: "Project successfully deleted" });
      }
    } catch (error) {
      next(error);
    }
  },
  expellUser: async ({ params: { id }, body: { duration } }, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  },
};
