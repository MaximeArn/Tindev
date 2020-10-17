/** @format */

const { Project } = require("../models");
const ProjectError = require("../utils/CustomError");

module.exports = async ({ project, applicant }, next) => {
  try {
    const exist = await Project.findById(project);
    if (!exist) {
      throw new ProjectError("This project does not exist", 404);
    }
    if (!applicant) {
      throw new ProjectError("User not found", 403);
    }
    return exist;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
