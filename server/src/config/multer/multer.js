const multer = require("multer");
const path = require("path");

const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("PASSED IN MULTER CONFIG");
    callback(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, { fieldname, mimetype }, callback) => {
    const fileExtension = ALLOWED_MIME_TYPE[mimetype];
    const fileName = `${fieldname}-${Date.now()}.${fileExtension}`;
    callback(null, fileName);
  },
});
