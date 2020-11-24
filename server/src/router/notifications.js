const router = require("express").Router();
const {
  notifications,
  deleteNotification,
} = require("../controllers/notifications");

router.get("/", notifications);
router.get("/:id", deleteNotification);

module.exports = router;
