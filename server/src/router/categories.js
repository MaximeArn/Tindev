const router = require('express').Router();
const {fetchCategories} = require('../controllers/categories');

router.get('/', fetchCategories);

module.exports = router;