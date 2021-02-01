const { Category } = require("../models");
const { categoryResultValidator } = require("../utils/validators");

module.exports = {
  fetchCategories: async (req, res, next) => {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },
  fetchCategoryResult: async ({ params: { category } }, res, next) => {
    try {
      const results = await categoryResultValidator(category, next);

      if (results) {
        return res.status(200).json(results);
      }
    } catch (error) {
      next(error);
    }
  },
};
