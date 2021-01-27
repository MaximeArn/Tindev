const { Project } = require("../../models");
const UserError = require("../CustomError");

module.exports = async (params, next) => {
  try {
    const project = await Project.findOne(params);

    if (!project) {
      throw new UserError("This project doesn't exist", 400);
    }

    return project;
  } catch (error) {
    next(error);
  }
};
