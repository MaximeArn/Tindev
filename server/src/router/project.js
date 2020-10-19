/** @format */

const router = require("express").Router();
const {
  create,
  getProjects,
  getProjectById,
  apply,
  acceptApplicant,
  declineApplicant,
} = require("../controllers/project");

const imageDiskStorage = require("../config/multer");
const upload = require("multer")({
  storage: imageDiskStorage,
  // limits: { fileSize: 8500 },
});

router.get("/", getProjects);
router.post("/create", upload.single("image"), create);
router.post("/apply", apply);
router.patch("/accept_applicant", acceptApplicant);
router.patch("/decline_applicant", declineApplicant);

module.exports = router;
