const { createTransport } = require("nodemailer");

module.exports = createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAILER,
    pass: process.env.EMAILERPW,
  },
});
