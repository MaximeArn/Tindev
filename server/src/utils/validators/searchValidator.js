const { User, Project, Category } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ query }, next) => {
  try {
    if (!query) throw new SearchError("Invalid research", 400);

    const project = Project.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
      ],
    });

    const user = User.find({
      $or: [
        { username: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
      ],
    });

    //not useful at the moment but might use it later on with a category allocated page
    const category = await Category.find({
      name: { $regex: `(?i)${query}` },
    });

    console.log(category);

    const [projects, users] = await Promise.all([project, user]);

    return [...projects, ...users];
  } catch (error) {
    next(error);
  }
};
