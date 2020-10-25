const { User, Project } = require("../models");
const { searchValidator, tokenValidator } = require("../utils/validators");

module.exports = {
  search: async ({ params }, res, next) => {
    try {
      const result = await searchValidator(params, next);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
