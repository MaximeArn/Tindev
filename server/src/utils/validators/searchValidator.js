const { User, Project, Category } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ query }, next) => {
  try {
    if (!query) throw new SearchError("Invalid research", 400);
    const regex = `^${query}`;

    const project = Project.find({
      $or: [
        { title: { $regex: regex, $options: "i" } },
        { author: { $regex: regex, $options: "i" } },
      ],
    });

    const user = User.find({
      $or: [
        { username: { $regex: regex, $options: "i" } },
        { city: { $regex: regex, $options: "i" } },
      ],
    });

    //not useful at the moment but might use it later on with a category allocated page
    const category = await Category.find({
      name: { $regex: regex, $options: "i" },
    });

    const [projects, users] = await Promise.all([project, user]);

    return [...projects, ...users];
  } catch (error) {
    next(error);
  }
};
