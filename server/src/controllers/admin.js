const { User, Project } = require("../models");
const {
  projectDeletionValidator,
  userProfileValidator,
} = require("../utils/validators/");

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
      const user = await userProfileValidator({ _id: id }, next);

      if (user) {
        await User.updateOne(
          { _id: id },
          {
            suspended: {
              status: true,
              duration:
                !isNaN(duration) && new Date(Date.now() + duration * 60 * 60),
            },
          }
        );

        return res.status(200).json({
          message: "This user's account has been successfully suspended",
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
