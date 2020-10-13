const router = require("express").Router();
const { create } = require("../controllers/project");
const imageDiskStorage = require("../config/multer");
const upload = require("multer")({
  storage: imageDiskStorage,
  //   limits: { fileSize: 8500 },
});

router.post("/create", upload.single("image"), create);

module.exports = router;
