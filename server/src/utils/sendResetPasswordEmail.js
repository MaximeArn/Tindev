const transporter = require("./nodeMailerTransporter");

module.exports = async (email, token) => {
  try {
    await transporter.sendMail({
      from: "'Tindev' <no-reply@tindev.com>",
      to: email,
      subject: "Forgotten Password",
      html: `<div>We received a request to reset your password. </div> <br /> <div>Click <a href="http://localhost:8080/account/reset_password/${token}">here</a> to reset your password.</div> <br /> <div>If the origin of the request wasn't yours, please ignore this message.</div>`,
    });
    return "A new reset link has been sent to your email address. Please follow the instructions";
  } catch (error) {
    console.error(error);
  }
};
