const { Category } = require("../../models");
const ProjectError = require("../CustomError");

module.exports = async (body, next) => {
  body.categories = JSON.parse(body.categories);
  const { title, size, categories } = body;

  try {
    const validateMandatoryFields = Object.values(body).every((value) => value);

    if (!validateMandatoryFields) {
      throw new ProjectError("Some required fields were not provided", 400);
    }

    const dbCategories = await Category.find();

    if (
      !categories.every((name) =>
        dbCategories.some(({ name: dbName }) => dbName === name)
      )
    ) {
      throw new ProjectError("Invalid Category provided", 400);
    }

    if (title.length > 50) {
      throw new ProjectError("Project Title characters limit exceeded", 400);
    }

    if (isNaN(parseInt(size))) {
      throw new ProjectError("Invalid Team size specified", 400);
    }

    parseInt(body.size);

    return body;
  } catch (error) {
    next(error);
  }
};
