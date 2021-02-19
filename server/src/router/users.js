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
  deleteChatWindow,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/chat_windows", getChatWindows);
router.get("/:username", getUserByUsername);
router.post("/messageHistory", getMessageHistory);
router.patch(
  "/update",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "background_image", maxCount: 1 },
  ]),
  update
);
router.patch("/chat_window", setChatWindow);
router.patch("/close_window", deleteChatWindow);
router.delete("/:id", deleteProfile);

module.exports = router;
