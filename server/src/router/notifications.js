const router = require("express").Router();
const {
  notifications,
  deleteNotification,
  reset,
} = require("../controllers/notifications");

router.get("/", notifications);
router.get("/:id", deleteNotification);
router.patch("/reset", reset);

module.exports = router;
