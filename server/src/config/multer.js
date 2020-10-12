const multer = require("multer");
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = multer.diskStorage({
  destination: (req, file, callback) => {
    const error = ALLOWED_MIME_TYPE[file.mimetype]
      ? null
      : new Error("Invalid file format");
    callback(error, "/src/public/uploads");
  },
  filename: (req, file, callback) => {
    const fileExtension = ALLOWED_MIME_TYPE[file.mimetype];
    const fileName = `${file.fieldname}-${Date.now()}.${fileExtension}`;
    callback(null, fileName);
  },
});
