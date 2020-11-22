const router = require("express").Router();
const { notifications } = require("../controllers/notifications");

router.get("/", notifications);

module.exports = router;
