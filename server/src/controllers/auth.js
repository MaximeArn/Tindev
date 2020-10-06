const compareUnHashed = require("../secure/compareUnHashed");
const encrypt = require("../secure/encryptPassword");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

const authRouter = {
  register: async (req, res) => {
    const { body } = req;
    if (!body)
      return res.send(500).json({ msg: "No body found in request headers" });

    const { age, city, lastname, firstname, ...mandatory } = body;
    const isTruthy = Object.values(mandatory).every((value) => value);

    if (!isTruthy)
      return res
        .send(500)
        .json({ msg: "Some required fields were not provided" });

    if (!body.email.match(emailRegex))
      return res.send(500)({ msg: "Invalid Email" });

    isNaN(body.age)
      ? res.send(500).json({ msg: "Invalid Age was submitted" })
      : parseInt(body.age);

    if (!compareUnHashed(body.password, body.confirmPassword))
      return res.status(500).json({ msg: "Passwords do not match" });

    const hashedPassword = encrypt(body.password);

    //TODO : check if email already exists && set user to db with default role as User.
  },

  login: async (req, res) => {},
};

module.exports = authRouter;
