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

        return res.status(200).json({ message: "Project successfully deleted" });
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
      const { username } = (await userProfileValidator({ _id: id }, next)) || {};

      if (username) {
        const userSocket = connectedUsers[username];
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + duration);

        await User.updateOne(
          { _id: id },
          {
            suspended: {
              status: true,
              duration: !isNaN(duration) && currentDate,
            },
          }
        );

        userSocket &&
          userSocket.socket.emit(
            "expell-user",
            `Your account has been suspended ${
              isNaN(duration) ? "permanently" : `for ${duration} hours`
            } `
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
