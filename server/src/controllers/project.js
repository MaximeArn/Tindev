const { Project } = require("../models");
const fieldValidator = require("../utils/projectFieldValidator");

module.exports = {
  create: async (req, res, next) => {
    console.log(req.body);
    // console.log(req.file);
    try {
      const { title, description, category, size } = req.body;
      if (!title) throw new Error("Incorrect team size provided");
    } catch (error) {
      next({ error, status: 400 });
    }
  },
};
