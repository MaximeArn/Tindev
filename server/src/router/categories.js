const router = require("express").Router();
const { fetchCategories, fetchCategoryResult } = require("../controllers/categories");

router.get("/", fetchCategories);
router.get("/:category", fetchCategoryResult);

module.exports = router;
