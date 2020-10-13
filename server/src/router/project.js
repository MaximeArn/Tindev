/** @format */

const router = require("express").Router();
const { create, getAllProjects } = require("../controllers/project");
const imageDiskStorage = require("../config/multer");
const upload = require("multer")({
  storage: imageDiskStorage,
  // limits: { fileSize: 8500 },
});

router.post("/create", upload.single("image"), create);
router.get("/", getAllProjects);

module.exports = router;
