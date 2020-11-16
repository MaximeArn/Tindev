const { tokenValidator } = require("../../utils/validators");
const UserError = require("../../utils/CustomError");
const { User } = require("../../models");
const path = require("path");
const fs = require("fs").promises;
const ALLOWED_MIME_TYPE = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
};

module.exports = async (
  { body, cookies: { token } },
  { mimetype },
  callback
) => {
  try {
    const { id } = await tokenValidator(token, null);

    if (!id) return callback(new UserError("User not found", 404));

    if (!body.avatar) return callback(new UserError("Image not found", 400));

    if (!ALLOWED_MIME_TYPE[mimetype]) {
      return callback(new UserError("Invalid file format", 400));
    }

    const { avatar } = await User.findById(id);

    const imageRemover = () => {
      return new Promise(async (resolve, reject) => {
        try {
          await fs.unlink(
            path.join(__dirname, `../../public/uploads/users/${avatar}`)
          );
          resolve({ message: "Success" });
        } catch (error) {
          resolve(error);
        }
      });
    };

    avatar && avatar !== "default-image.jpg" && (await imageRemover());

    return callback(null, true);
  } catch (error) {
    callback(new Error(error));
  }
};
