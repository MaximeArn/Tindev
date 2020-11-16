const router = require("express").Router();
const upload = require("multer")();
const {
  getUsers,
  getUserByUsername,
  getMessageHistory,
  getUserProfile,
  update,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/user", getUserProfile);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);
router.patch("/update", upload.single("avatar"), update);

module.exports = router;
