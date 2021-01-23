const { Category } = require("../../models");
const ProjectError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeConfig = require("../../config/sanitize");

module.exports = async (body, next) => {
  try {
    body.categories = JSON.parse(body.categories);
    body.size = parseInt(body.size);
    const { title, size, categories } = body;
    const dbCategories = await Category.find();

    if (!Object.values(body).every((value) => value.trim())) {
      throw new ProjectError("Some required fields were not provided", 400);
    }

    if (
      !categories.every((category) => dbCategories.some(({ name }) => name === category))
    ) {
      throw new ProjectError("Invalid Category provided", 400);
    }

    if (title.length > 50) {
      throw new ProjectError("Project Title characters limit exceeded", 400);
    }

    if (isNaN(size) || size < 2) {
      throw new ProjectError("Invalid Team size specified", 400);
    }

    Object.entries(body).forEach(([key, value]) => {
      if (key !== "categories") {
        body[key] = sanitize(value, sanitizeConfig);
      }
    });

    return body;
  } catch (error) {
    next(error);
  }
};
