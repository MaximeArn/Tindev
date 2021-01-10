const router = require("express").Router();
const { deleteProject, expellUser } = require("../controllers/admin");

router.delete("/project/:id", deleteProject);

module.exports = router;
