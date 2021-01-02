const { Project, User } = require("../../models");
const ProjectError = require("../CustomError");
module.exports = async (id, next) => {
  try {
    const project = await Project.findById(id);
    const user = await User.findOne({ username: project.author });

    if (!project) throw new ProjectError("This project does not exist.", 404);

    return { project, user };
  } catch (error) {
    next(error);
  }
};
