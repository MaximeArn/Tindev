/** @format */

const router = require("express").Router();
const {
  create,
  getProjects,
  apply,
  addApplicant,
} = require("../controllers/project");

const imageDiskStorage = require("../config/multer");
const upload = require("multer")({
  storage: imageDiskStorage,
  // limits: { fileSize: 8500 },
});

router.get("/", getProjects);
router.post("/create", upload.single("image"), create);
router.post("/apply", apply);
router.patch("/accept_applicant", addApplicant);

module.exports = router;
