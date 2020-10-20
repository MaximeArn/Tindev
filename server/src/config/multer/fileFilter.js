const ProjectError = require("../../utils/CustomError");
const { Category } = require("../../models");

const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async ({ body }, { mimetype }, callback) => {
  const { title, size, categories: category } = body;

  const validateFieldsValues = Object.values(body).every((value) => value);

  if (!validateFieldsValues) {
    return callback(
      new ProjectError("Some required fields were not provided.", 400)
    );
  }

  const categories = await Category.find();

  if (!categories.some(({ name }) => name === category)) {
    return callback(new ProjectError("Invalid Category provided.", 400));
  }

  if (title.length > 50) {
    return callback(
      new ProjectError("Title exceeded specifications limit.", 400)
    );
  }

  if (isNaN(parseInt(size))) {
    return callback(new ProjectError("Invalid team size provided.", 400));
  }

  parseInt(body.size);
  body.categories = categories.filter(({ name }) => name === category);

  return ALLOWED_MIME_TYPE[mimetype]
    ? callback(null, true)
    : callback(new ProjectError("Invalid file format", 400));
};
