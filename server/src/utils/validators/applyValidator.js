const ApplyError = require("../CustomError");
const { Project } = require("../../models");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");

module.exports = async ({ body, id }, next) => {
  const { appliant, message, project: projectId } = body;

  try {
    const project = await Project.findOne({ _id: projectId });

    if (!appliant) throw new ApplyError("User not found", 403);

    if (!project) {
      throw new ApplyError("This project does not exist anymore", 404);
    }

    if (project.applicants.find(({ _id }) => _id == id)) {
      throw new ApplyError("You already applied to this project.", 400);
    }

    if (!message) throw new ApplyError("Please specify a message.", 400);

    body.message = sanitize(message, sanitizeConfig);

    return { body, project };
  } catch (error) {
    console.error(error);
    next(error);
  }
};
