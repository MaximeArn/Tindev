//TODO: use db categories result to check if the provided category does exist , instead of using fake data
const categories = [
  "Video Game",
  "Web",
  "AI",
  "Software",
  "Static",
  "Java",
  "React",
  "Angular",
  "Vue",
  "NodeJS",
];
const ProjectError = require("../utils/ProjectError");

module.exports = (body, next) => {
  const { title, size, category } = body;

  try {
    const validateMandatoryFields = Object.values(body).every((value) => value);

    if (!validateMandatoryFields) {
      throw new ProjectError("Some required fields were not provided", 400);
    }

    if (!categories.includes(category)) {
      throw new ProjectError("Invalid Category provided", 400);
    }

    if (title.length > 50) {
      throw new ProjectError("Project Title characters limit exceeded", 400);
    }

    if (isNaN(parseInt(size))) {
      throw new ProjectError("Invalid Team size specified", 400);
    }

    parseInt(size);

    return body;
  } catch (error) {
    console.error(error);
    next(error);
  }
};
