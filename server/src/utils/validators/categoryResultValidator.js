const { Category, Project, User } = require("../../models");
const CategoryError = require("../CustomError");

module.exports = async (name, next) => {
  try {
    const category = await Category.findOne({ name });

    if (!category) {
      throw new CategoryError("This category does not exist", 400);
    }

    const projects = Project.find({ categories: { $in: [name] } });
    const users = User.find({ technos: { $in: [name] } });

    const [projectsResults, usersResults] = await Promise.all([projects, users]);

    return projectsResults.concat(usersResults);
  } catch (error) {
    next(error);
  }
};
