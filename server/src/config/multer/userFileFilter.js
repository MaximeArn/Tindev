const UserError = require("../../utils/CustomError");
const { User } = require("../../models");
const path = require("path");
const fs = require("fs").promises;
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async ({ decoded: { id } }, { mimetype, fieldname }, callback) => {
  try {
    if (!mimetype) return callback(new UserError("Image not found", 400));

    if (!ALLOWED_MIME_TYPE[mimetype]) {
      return callback(new UserError("Invalid file format", 400));
    }

    const user = await User.findById(id);

    const imageRemover = () => {
      return new Promise(async (resolve) => {
        try {
          //TODO: change dynamic string value to handle both avatar and background
          await fs.unlink(
            path.join(__dirname, `../../public/uploads/users/${user[fieldname]}`)
          );
          resolve({ message: "Success" });
        } catch (error) {
          resolve(error);
        }
      });
    };

    //TODO: implements conditional checks to handle avatar and background_image fields
    avatar && avatar !== "default-image.jpg" && (await imageRemover());

    return callback(null, true);
  } catch (error) {
    callback(new Error(error));
  }
};
