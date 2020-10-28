const { Project } = require("../../models");
const ProjectError = require("../CustomError");

module.exports = async (id, field, next) => {
  try {
    const project = await Project.findOne({ _id: id });

    if (!project) throw new ProjectError("This project does not exist", 404);

    //TODO field validation

    return project;
  } catch (error) {
    next(error);
  }
};
