const { Project } = require("../../models");
const ProjectError = require("../CustomError");

module.exports = async (id, body, next) => {
  try {
    const exists = Object.values(body).every((value) => true);

    if (!exists) throw new ProjectError("Invalid value received", 400);

    const project = await Project.findOne({ _id: id });

    if (!project) throw new ProjectError("This project does not exist", 404);

    //TODO field validtaion

    return project;
  } catch (error) {
    next(error);
  }
};
