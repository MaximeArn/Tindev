const { User, Project } = require("../../models");
const SearchError = require("../CustomError");
module.exports = async ({ search }, next) => {
  try {
    if (!search) throw new SearchError("Invalid research", 400);

    search = search.toLowerCase();

    const projects = await Project.find({
      $or: [
        { title: search },
        { author: search },
        { categories: { $in: [search] } },
      ],
    });

    console.log(projects);
  } catch (error) {
    next(error);
  }
};
