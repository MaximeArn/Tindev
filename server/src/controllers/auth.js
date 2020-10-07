const compareHashed = require("../secure/compareHashed");
const fieldValidator = require("../utils/fieldValidator");
const { User } = require("../models");

const authRouter = {
  register: async (req, res) => {
    const { body } = req;
    try {
      const validator = await fieldValidator(body);

      return validator instanceof Error
        ? res.status(500).json({ msg: validator.message })
        : User.create(body)
            .then((result) =>
              res
                .status(200)
                .json({ result, msg: "Account Successfully created" })
            )
            .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  },

  login: async (req, res) => {
    const { email: sentEmail, password: sentPassword } = req.body;

    try {
      let isPasswordMatching;
      const user = await User.findOne({ email: sentEmail });
      const { email, username } = user;

      if (user) {
        isPasswordMatching = await compareHashed(sentPassword, user.password);
      }

      return !user || !isPasswordMatching
        ? res.status(500).json({ msg: "Incorrect Email or Password" })
        : res.status(200).json({
            token: "rlazrmalr5xazkr&#rok#~&45",
            user: { email, username },
          });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = authRouter;
