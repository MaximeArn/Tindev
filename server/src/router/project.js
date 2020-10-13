const router = require("express").Router();
const { create } = require("../controllers/project");
const imageDiskStorage = require("../config/multer");
const errorHandler = require("../middlewares/ProjectErrorHandler");

const upload = require("multer")({ storage: imageDiskStorage });
// upload.single("image")
router.post("/create", create);

module.exports = router;
