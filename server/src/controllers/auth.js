const compareUnHashed = require("../secure/compareUnHashed");
const compareHashed = require("../secure/compareHashed");
const encrypt = require("../secure/encryptPassword");
const { Project, User } = require("../models");
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
);

const authRouter = {
  register: async (req, res) => {
    const { body } = req;

    // const { age, city, lastname, firstname, ...mandatory } = body;
    // const isTruthy = Object.values(mandatory).every((value) => value);

    // if (!isTruthy)
    //   return res
    //     .status(500)
    //     .json({ msg: "Some required fields were not provided" });

    // if (body.email && !body.email.match(emailRegex))
    //   return res.status(500).json({ msg: "Invalid Email" });

    // if (body.age && isNaN(body.age))
    //   return res.status(500).json({ msg: "Invalid Age was submitted" });

    // if (!compareUnHashed(body.password, body.confirmPassword)) {
    //   return res.status(500).json({ msg: "Passwords do not match" });
    // }

    // delete body.confirmPassword;
    // await encrypt(body);

    const user = await User.find({
      $or: [{ email: body.email }, { username: body.username }],
    });

    // return user
    //   ? res.status(500).json({ msg: "Email or Username already in use" })
    //   : User.create({ ...body })
    //       .then((result) =>
    //         res
    //           .status(200)
    //           .json({ result, msg: "Account Successfully created" })
    //       )
    //       .catch((error) => console.error(error));
  },

  login: async (req, res) => {
    const { body } = req;
    console.log(body);
  },
};

module.exports = authRouter;
