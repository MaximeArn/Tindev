const transporter = require("./nodeMailerTransporter");

module.exports = async (email, token) => {
  try {
    return await transporter.sendMail({
      from: "'Tindev' <no-reply@tindev.com>",
      to: email,
      subject: "Account activation",
      html: `<div>Your account is almost ready. </div> <br /> <div>There is one last thing you need to do : </div> <br /> <div>Click <a href="http://localhost:8080/account/verify/${token}">here</a> to activate your account.</div>`,
    });
  } catch (error) {
    console.error(error);
  }
};
