const { User, Project, Category } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ query }, next) => {
  try {
    if (!query) throw new SearchError("Invalid research", 400);

    const regex = {
      $regex: `^${query}`,
      $options: "i",
    };

    const project = Project.find({
      $or: [{ title: regex }, { author: regex }],
    });

    const user = User.find({
      $or: [{ username: regex }, { city: regex }],
    });

    const category = Category.find({
      name: regex,
    });

    const [projects, users, categories] = await Promise.all([project, user, category]);

    return [...projects, ...users, ...categories];
  } catch (error) {
    next(error);
  }
};
