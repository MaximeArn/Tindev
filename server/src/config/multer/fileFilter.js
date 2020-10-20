const ProjectError = require("../../utils/CustomError");
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = ({ body }, { mimetype }, callback) => {
  console.log(body);
  // ALLOWED_MIME_TYPE[mimetype]
  //   ? callback(null, true)
  //   : callback(new ProjectError("Invalid file format", 400));
};
