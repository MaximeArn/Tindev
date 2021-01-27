const { Project, Category, User } = require("../../models");
const ProjectError = require("../CustomError");
const sanitize = require("sanitize-html");
const sanitizeOptions = require("../../config/sanitize");

module.exports = async (id, body, next) => {
  try {
    const project = await Project.findById(id);
    const truthy = Object.values(body).every((value) => value.trim());

    if (!truthy) throw new ProjectError("Empty values are not allowed.", 400);

    if (!project) throw new ProjectError("This project does not exist", 404);

    if (body.title && body.title.length > 50) {
      throw new ProjectError("Title character length must not exceed 50", 400);
    }

    if (body.size && (isNaN(parseInt(body.size)) || body.size < 2)) {
      throw new ProjectError("Provided size is invalid", 400);
    }

    if (body.categories) {
      body.categories = JSON.parse(body.categories);
      const categories = await Category.find();
      const valid = body.categories.every((category) =>
        categories.some(({ name }) => name === category)
      );

      if (!valid) {
        throw new ProjectError("Invalid Category provided", 400);
      }
    }

    if (body.author && !(await User.findOne(body))) {
      throw new ProjectError("Cannot delegate project ownership to this user", 400);
    }

    if (!body.categories) {
      Object.entries(body).forEach(
        ([key, value]) => (body[key] = sanitize(value, sanitizeOptions))
      );
    }

    return project;
  } catch (error) {
    next(error);
  }
};
