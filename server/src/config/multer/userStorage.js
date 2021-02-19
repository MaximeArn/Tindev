const { diskStorage } = require("multer");
const path = require("path");

const ALLOWED_EXTENSIONS = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = diskStorage({
  destination: (req, file, callback) =>
    callback(null, path.join(__dirname, "../../public/uploads/users")),
  filename: (req, { mimetype, fieldname }, callback) =>
    callback(
      null,
      fieldname === "avatar"
        ? `avatar-${Date.now()}.${ALLOWED_EXTENSIONS[mimetype]}`
        : `avatar-background-image-${Date.now()}.${ALLOWED_EXTENSIONS[mimetype]}`
    ),
});
