const ApplyError = require("../CustomError");
const { Project, User } = require("../../models");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");

module.exports = async ({ body, id }, next) => {
  const { appliant, message, project: projectId } = body;

  try {
    const { _id, applicants, author } = await Project.findOne({
      _id: projectId,
    });

    const owner = await User.findOne({ username: author });

    if (!appliant) throw new ApplyError("User not found", 403);

    if (!_id) {
      throw new ApplyError("This project does not exist anymore", 404);
    }

    if (applicants.find(({ _id }) => _id == id)) {
      throw new ApplyError("You already applied to this project.", 400);
    }

    if (!owner) throw new ApplyError("Project owner does not exist", 404);

    if (!message) throw new ApplyError("Please specify a message.", 400);

    body.message = sanitize(message, sanitizeConfig);

    return { owner, project: { _id, applicants } };
  } catch (error) {
    next(error);
  }
};
