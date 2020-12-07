const router = require("express").Router();
const storage = require("../config/multer/userStorage");
const fileFilter = require("../config/multer/userFileFilter");
const upload = require("multer")({ storage, fileFilter });
const {
  getUsers,
  getUserByUsername,
  getMessageHistory,
  update,
  deleteProfile,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);
router.patch("/update", upload.single("avatar"), update);
router.delete("/:id", deleteProfile);

module.exports = router;
