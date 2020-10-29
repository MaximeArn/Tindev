const { tokenValidator } = require("../../utils/validators");
const { Project } = require("../../models");
const ProjectError = require("../../utils/CustomError");
const fs = require("fs").promises;
const pathResolver = require("path");
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async (
  { params: { id }, cookies: { token } },
  { mimetype },
  callback
) => {
  try {
    const user = await tokenValidator(token, null);
    const project = await Project.findOne({ _id: id });
    const path = pathResolver.join(__dirname, "../../public/uploads");

    if (!user) {
      return callback(new ProjectError("User not found.", 404));
    }

    if (!project) {
      return callback(new ProjectError("This project does not exist.", 404));
    }

    if (!ALLOWED_MIME_TYPE[mimetype]) {
      return callback(new ProjectError("Invalid file format provided", 400));
    }

    project.image !== "image-default.jpeg" &&
      (await fs.unlink(`${path}/${project.image}`));

    return callback(null, true);
  } catch (error) {
    console.error(error);
  }
};
