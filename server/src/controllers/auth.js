/** @format */

const compareHashed = require("../secure/compareHashed");
const fieldValidator = require("../utils/fieldValidator");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const { User } = require("../models");

const authRouter = {
  register: async (req, res) => {
    const { body } = req;
    try {
      const validator = await fieldValidator(body);

      return validator instanceof Error
        ? res.status(400).json({ msg: validator.message })
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
    const { email, password } = req.body;
    console.log("login called !!");

    try {
      let isPasswordMatching;
      let token;
      const user = await User.findOne({ email });

      if (user) {
        isPasswordMatching = await compareHashed(password, user.password);
        token = jwt.sign({ id: user.id, email: user.email }, secret);
      }

      return !user || !isPasswordMatching
        ? res.status(400).json({ msg: "Incorrect Email or Password" })
        : res.status(200).json({
            token,
            email: user.email,
            username: user.username,
          });
    } catch (error) {
      console.error(error);
    }
  },
  verify: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (error, decoded) => {
      if (decoded) {
        User.findOne({ email: decoded.email })
          .then(({ username, email }) => {
            return email
              ? res.status(200).json({ username, email })
              : res.status(404).json({ msg: "Unknown user from token" });
          })
          .catch((error) => console.error(error));
      }
    });
  },
};

module.exports = authRouter;
