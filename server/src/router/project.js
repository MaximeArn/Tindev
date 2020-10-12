const router = require("express").Router();
const upload = require("multer")();
const { create } = require("../controllers/project");

router.post("/create", upload.single("imageName"), create);

module.exports = router;
