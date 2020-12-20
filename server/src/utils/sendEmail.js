const { createTransport } = require("nodemailer");

module.exports = async (email, token) => {
  try {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAILER,
        pass: process.env.EMAILERPW,
      },
    });

    return await transporter.sendMail({
      from: {
        name: "Tindev",
        address: "<no-reply@tindev.com>",
      },
      to: email,
      subject: "Account activation",
      html: `<div>Your account is almost ready. </div> <br /> <div>There is one last thing you need to do : </div> <br /> <div>Click <a href="http://localhost:8080/account/verify/${token}">here</a> to activate your account.</div>`,
    });
  } catch (error) {
    console.error(error);
  }
};
