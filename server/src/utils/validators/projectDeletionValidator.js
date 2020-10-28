const { Project } = require("../../models");
const ProjectError = require("../CustomError");

module.exports = async (id, next) => {
  try {
    const project = await Project.findOne({ _id: id });

    if (!project) throw new ProjectError("This project does not exist.", 404);

    return project;
  } catch (error) {
    next(error);
  }
};
