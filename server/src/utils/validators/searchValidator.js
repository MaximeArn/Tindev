const { User, Project } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ search }, next) => {
  try {
    if (!search) throw new SearchError("Invalid research", 400);

    const project = Project.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { categories: { $in: [search] } },
      ],
    });

    const user = User.find({
      $or: [
        { username: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
      ],
    });

    const [projects, users] = await Promise.all([project, user]);

    return { projects, users };
  } catch (error) {
    next(error);
  }
};
