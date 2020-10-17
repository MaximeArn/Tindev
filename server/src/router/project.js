/** @format */

const router = require("express").Router();
const {
  create,
  getAllProjects,
  addApplicant,
} = require("../controllers/project");
const imageDiskStorage = require("../config/multer");
const upload = require("multer")({
  storage: imageDiskStorage,
  // limits: { fileSize: 8500 },
});

router.get("/", getAllProjects);
router.post("/create", upload.single("image"), create);
router.patch("/accept_applicant", addApplicant);
module.exports = router;
