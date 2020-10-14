const { Category } = require("../models");

module.exports = {
  fetchCategories: async (req, res, next) => {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
