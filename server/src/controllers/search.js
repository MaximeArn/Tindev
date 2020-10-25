const { User, Project } = require("../models");
const { searchValidator, tokenValidator } = require("../utils/validators");

module.exports = {
  search: async ({ body }, res, next) => {
    try {
      const { projects, users } = await searchValidator(body, next);
      const result = projects.concat(users);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
