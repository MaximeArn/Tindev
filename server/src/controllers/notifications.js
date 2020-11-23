const { User } = require("../models");
const tokenValidator = require("../utils/validators/tokenValidator");

module.exports = {
  notifications: async ({ cookies: { token } }, res, next) => {
    console.log("notifications called");
    try {
      const { id } = await tokenValidator(token, next);

      if (id) {
        const { notifications } = await User.findById(id, {
          notifications: 1,
        }).sort({ notifications: { tooltips: "desc" } });
        console.log("NOTIFS : ", notifications);
        return res.status(200).json(notifications);
      }
    } catch (error) {
      next(error);
    }
  },
};
