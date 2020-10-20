/** @format */

const router = require("express").Router();
const imageDiskStorage = require("../config/multer/multer");
const fileFilter = require("../config/multer/fileFilter");
const multer = require("multer");
const upload = multer({ storage: imageDiskStorage, fileFilter });
const {
  create,
  getProjects,
  apply,
  acceptApplicant,
  declineApplicant,
  verifyOwner,
} = require("../controllers/project");

router.get("/", getProjects);
router.post("/create", upload.single("image"), create);
router.post("/apply", apply);
router.post("/verify_owner", verifyOwner);
router.patch("/accept_applicant", acceptApplicant);
router.patch("/decline_applicant", declineApplicant);

module.exports = router;
