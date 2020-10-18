/** @format */

const { Project } = require("../../models");
const ProjectError = require("../CustomError");

module.exports = async ({ projectId, userId }, next) => {
  try {
    const exist = await Project.findById(projectId);

    if (!exist) {
      throw new ProjectError("This project does not exist", 404);
    }

    if (!userId) {
      throw new ProjectError("User not found", 403);
    }

    return exist;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
