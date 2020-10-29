const { Project, Category } = require("../../models");
const ProjectError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeOptions = require("../../config/sanitize");

module.exports = async (id, body, next) => {
  const { field, value } = body;
  try {
    const exists = Object.values(body).every((value) => value);

    if (!exists) throw new ProjectError("Empty values are not allowed.", 400);

    if (field === "title") {
      if (value.length > 50) {
        throw new ProjectError(
          "Title character length must not exceed 50",
          400
        );
      }
    }

    if (field === "size") {
      if (isNaN(parseInt(value)) || value < 2) {
        throw new ProjectError("Provided size is invalid", 400);
      }
      body.value = parseInt(body.value);
    }

    if (field === "categories") {
      body.value = JSON.parse(body.value);
      const categories = await Category.find();
      const valid = !value.every((category) => {
        categories.some(({ name }) => name === category);
      });

      if (!valid) throw new ProjectError("Invalid Category provided", 400);
    }

    const project = await Project.findOne({ _id: id });

    if (!project) throw new ProjectError("This project does not exist", 404);

    body.value = sanitize(body.value, sanitizeOptions);

    return project;
  } catch (error) {
    next(error);
  }
};
