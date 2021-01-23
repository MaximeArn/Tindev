const ApplyError = require("../CustomError");
const { Project, User } = require("../../models");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");

module.exports = async ({ body, id }, next) => {
  try {
    body.message = sanitize(message, sanitizeConfig);
    const { appliant, message, project } = body;
    const { _id, applicants, contributors, author: username } =
      (await Project.findById(project)) || {};

    const owner = await User.findOne({ username });

    if (!appliant) throw new ApplyError("User not found", 400);

    if (!_id) {
      throw new ApplyError("This project does not exist anymore", 404);
    }

    if (
      applicants.find(({ _id }) => _id == id) ||
      contributors.find(({ username }) => username === appliant.username)
    ) {
      throw new ApplyError("You already applied to this project.", 400);
    }

    if (!owner) throw new ApplyError("Project owner does not exist", 404);

    if (!message.trim()) throw new ApplyError("Please specify a message.", 400);

    return { owner, project: { _id, applicants } };
  } catch (error) {
    next(error);
  }
};
