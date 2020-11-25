const { Project, User } = require("../../models");
const ProjectError = require("../CustomError");
const UserError = require("../CustomError");
module.exports = async (id, userId, next) => {
  try {
    const [project, user] = await Promise.all([
      Project.findById(id),
      User.findById(userId),
    ]);

    if (!project) throw new ProjectError("This project does not exist.", 404);

    if (!user) throw new UserError("This user does not exist", 404);

    return { project, user };
  } catch (error) {
    next(error);
  }
};
