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
  getChatWindows,
  setChatWindow,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/chat_windows", getChatWindows);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);
router.patch("/update", upload.single("avatar"), update);
router.patch("/chat_window", setChatWindow);
router.delete("/:id", deleteProfile);

module.exports = router;
