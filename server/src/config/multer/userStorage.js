const { ALL } = require("dns");
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
  filename: (req, { mimetype, fieldname }, callback) => {
    req.fieldName = fieldname;
    callback(
      null,
      fieldname === "avatar"
        ? `${fieldname}-${Date.now()}.${ALLOWED_EXTENSIONS[mimetype]}`
        : `avatar-${fieldname.replace("_", "-")}-${Date.now()}.${
            ALLOWED_EXTENSIONS[mimetype]
          }`
    );
  },
});
