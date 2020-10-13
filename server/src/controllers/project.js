const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    fieldValidator(req.body, next);
  },
};
