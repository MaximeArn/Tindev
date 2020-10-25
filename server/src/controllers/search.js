const { User, Project } = require("../models");
const { searchValidator, tokenValidator } = require("../utils/validators");

module.exports = {
  search: async ({ body }, res, next) => {
    const result = await searchValidator(body, next);
  },
};
