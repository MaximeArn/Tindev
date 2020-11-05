/** @format */

const { Project, Category } = require("../../models");
const ProjectError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeOptions = require("../../config/sanitize");

module.exports = async (id, body, next) => {
  try {
    const key = Object.keys(body)[0];
    const project = await Project.findOne({ _id: id });
    const exists = Object.values(body).every((value) => value);

    if (!exists) throw new ProjectError("Empty values are not allowed.", 400);

    if (body["title"]) {
      if (body.title.length > 50) {
        throw new ProjectError(
          "Title character length must not exceed 50",
          400
        );
      }
    }

    if (body["size"]) {
      if (isNaN(parseInt(body.size)) || body.size < 2) {
        throw new ProjectError("Provided size is invalid", 400);
      }
      body.value = parseInt(body.value);
    }

    if (body["categories"]) {
      body.categories = JSON.parse(body.categories);
      const categories = await Category.find();
      const valid = body.categories.every((category) =>
        categories.some(({ name }) => name === category)
      );

      if (!valid) {
        throw new ProjectError("Invalid Category provided", 400);
      }
    }

    if (!project) throw new ProjectError("This project does not exist", 404);

    if (key !== "categories") {
      body[key] = sanitize(body[key], sanitizeOptions);
    }

    return project;
  } catch (error) {
    next(error);
  }
};
