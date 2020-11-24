const { User } = require("../models");
const { tokenValidator } = require("../utils/validators");

module.exports = {
  notifications: async ({ cookies: { token } }, res, next) => {
    try {
      const { id } = await tokenValidator(token, next);

      if (id) {
        const {
          notifications: { tooltips, counter },
        } = await User.findById(id, {
          notifications: 1,
        });

        return res.status(200).json({
          counter,
          tooltips: tooltips.sort(
            ({ createdAt: createdAt1 }, { createdAt: createdAt2 }) =>
              createdAt1 > createdAt2 ? -1 : 1
          ),
        });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteNotification: async ({ cookies: { token } }, res, next) => {
    console.log("DELETE NOTIFICATION METHOD CALLED");
    try {
      const { id } = await tokenValidator(token, next);
    } catch (error) {
      next(error);
    }
  },
};
