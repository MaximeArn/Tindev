const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = (req, { mimetype }, callback) => {
  ALLOWED_MIME_TYPE.hasOwnProperty(mimetype)
    ? callback(null, true)
    : callback(new Error("Invalid file format"));
};
