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
  expellUser: async (
    { params: { id }, body: { duration } },
    res,
    next,
    connectedUsers
  ) => {
    try {
      const user = await userProfileValidator({ _id: id }, next);

      if (user) {
        //TODO: GET BANNED USER SOCKET FROM SOCKET OBJECT AND SEND NEW EVENT TO EXPELL HIM FROM THE APP
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
