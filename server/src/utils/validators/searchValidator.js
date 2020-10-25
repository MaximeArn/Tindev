const { User, Project } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ query }, next) => {
  try {
    if (!query) throw new SearchError("Invalid research", 400);

    const project = Project.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { categories: { $in: [query] } },
      ],
    });

    const user = User.find({
      $or: [
        { username: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
      ],
    });

    const [projects, users] = await Promise.all([project, user]);

    return [...projects, ...users];
  } catch (error) {
    next(error);
  }
};
