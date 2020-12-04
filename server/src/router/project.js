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

const projectRouterWrapper = (connectedUsers) => {
  router.get("/", getProjects);
  router.get("/:name", getProject);
  router.post("/create", upload.single("image"), create);
  router.post("/verify_owner", verifyOwner);
  router.post("/apply", (req, res, next) =>
    apply(connectedUsers, req, res, next)
  );
  router.patch("/contributor", (req, res, next) =>
    deleteContributor(connectedUsers, req, res, next)
  );
  router.patch("/accept_applicant", acceptApplicant);
  router.patch("/decline_applicant", declineApplicant);
  router.patch("/:id", patchUpload.single("image"), updateById);
  router.delete("/:id", deleteById);
  return router;
};

module.exports = projectRouterWrapper;
