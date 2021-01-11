const router = require("express").Router();
const { deleteProject, expellUser } = require("../controllers/admin");

router.delete("/project/:id", deleteProject);
router.patch("/user/:id", expellUser);

module.exports = router;
