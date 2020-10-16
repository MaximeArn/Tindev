const ApplyError = require("../CustomError");
const { Project } = require("../../models");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");

module.exports = async (body, next) => {
  const { appliant, message, project: id } = body;
  try {
    const project = await Project.findOne({ _id: id });

    if (!appliant) throw new ApplyError("User not found", 400);

    if (!project) {
      throw new ApplyError("This project does not exist anymore", 404);
    }

    body.message = sanitize(message, sanitizeConfig);
    return { body, project };
  } catch (error) {
    console.error(error);
    next(error);
  }
};
