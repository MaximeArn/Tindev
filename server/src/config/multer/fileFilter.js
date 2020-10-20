const ProjectError = require("../../utils/CustomError");
const { Category } = require("../../models");
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async ({ body }, { mimetype }, callback) => {
  const { title, description, size, categories: category } = body;

  const validateFieldsValues = Object.values(body).every((value) => value);

  !validateFieldsValues &&
    callback(new ProjectError("Some required fields were not provided.", 400));

  const categories = await Category.find();

  !categories.some(({ name }) => name === category) &&
    callback(new ProjectError("Invalid Category provided.", 400));

  !description && callback(new ProjectError("Please fill in a description."));
  // ALLOWED_MIME_TYPE[mimetype]
  //   ? callback(null, true)
  //   : callback(new ProjectError("Invalid file format", 400));
};
