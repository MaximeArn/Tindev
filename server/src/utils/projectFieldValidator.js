const { Category } = require("../models");
const ProjectError = require("../utils/ProjectError");

module.exports = async (body, next) => {
  const { title, size, categories: category } = body;

  try {
    const validateMandatoryFields = Object.values(body).every((value) => value);

    if (!validateMandatoryFields) {
      throw new ProjectError("Some required fields were not provided", 400);
    }

    const categories = await Category.find();

    if (!categories.some(({ name }) => name === category)) {
      throw new ProjectError("Invalid Category provided", 400);
    }

    if (title.length > 50) {
      throw new ProjectError("Project Title characters limit exceeded", 400);
    }

    if (isNaN(parseInt(size))) {
      throw new ProjectError("Invalid Team size specified", 400);
    }

    parseInt(size);
    body.categories = [categories.find(({ name }) => name === category)];

    return body;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
