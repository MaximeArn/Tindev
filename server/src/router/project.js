/** @format */

const router = require("express").Router();
const imageDiskStorage = require("../config/multer/projectStorage");
const fileFilter = require("../config/multer/fileFilter");
const patchFileFilter = require("../config/multer/patchFileFilter");
const multer = require("multer");
const upload = multer({ storage: imageDiskStorage, fileFilter });
const patchUpload = multer({
  storage: imageDiskStorage,
  fileFilter: patchFileFilter,
});
const {
  create,
  getProjects,
  apply,
  acceptApplicant,
  declineApplicant,
  verifyOwner,
  deleteById,
  updateById,
  getProject,
  deleteContributor,
} = require("../controllers/project");

router.get("/", getProjects);
router.get("/:name", getProject);
router.post("/create", upload.single("image"), create);
router.post("/apply", apply);
router.post("/verify_owner", verifyOwner);
router.patch("/accept_applicant", acceptApplicant);
router.patch("/decline_applicant", declineApplicant);
router.patch("/contributor", deleteContributor);
router.delete("/:id", deleteById);
router.patch("/:id", patchUpload.single("image"), updateById);

module.exports = router;
