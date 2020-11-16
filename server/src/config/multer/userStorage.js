const multer = require("multer");
const path = require("path");

const extensions = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = multer.diskStorage({
  destination: (req, file, callback) =>
    callback(null, path.join(__dirname, "../../public/uploads/users")),
  filename: (req, { mimetype }, callback) =>
    callback(null, `avatar-${Date.now()}.${extensions[mimetype]}`),
});
