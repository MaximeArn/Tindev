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
          await fs.unlink(
            path.join(__dirname, `../../public/uploads/users/${user[fieldname]}`)
          );
          resolve({ message: "Success" });
        } catch (error) {
          resolve(error);
        }
      });
    };

    !user[fieldname].includes("default") && (await imageRemover());

    return callback(null, true);
  } catch (error) {
    callback(new Error(error));
  }
};
