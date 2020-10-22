const { Category } = require("../models");

module.exports = {
  fetchCategories: async (req, res, next) => {
    try {
      const categories = await Category.find();
      console.log(categories);
      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },
};
