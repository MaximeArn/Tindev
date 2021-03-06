const ProjectError = require("../../utils/CustomError");
const { Category } = require("../../models");
const { tokenValidator } = require("../../utils/validators");

const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async (
  { body, cookies: { token } },
  { mimetype },
  callback
) => {
  try {
    let { title, size, categories } = body;
    categories = JSON.parse(categories);
    const user = await tokenValidator(token, null);
    const validateFieldsValues = Object.values(body).every((value) => value);
    const dbCategories = await Category.find();
    const valid = categories.every((name) =>
      dbCategories.some(({ name: dbName }) => name === dbName)
    );

    if (!user) {
      return callback(new ProjectError("Please sign in.", 403));
    }

    if (!validateFieldsValues) {
      return callback(
        new ProjectError("Some required fields were not provided.", 400)
      );
    }

    if (!valid) {
      return callback(new ProjectError("Invalid Category provided", 400));
    }

    if (title.length > 50) {
      return callback(
        new ProjectError("Title exceeded specifications limit.", 400)
      );
    }

    if (isNaN(parseInt(size)) || size < 2) {
      return callback(new ProjectError("Invalid team size provided.", 400));
    }

    return ALLOWED_MIME_TYPE[mimetype]
      ? callback(null, true)
      : callback(new ProjectError("Invalid file format", 400));
  } catch (error) {
    return callback(new Error(error));
  }
};
