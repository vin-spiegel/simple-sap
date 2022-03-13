const mailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "085ef26a5d3ef4",
    pass: "bf4fdd62369ee7",
  },
};

const send = async (option) => {
  mailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "seoksuho@gmail.com",
  to: "seoksuho@gmail.com",
  subject: "테스트 메일입니다.",
  text: "nodejs 테스트",
};

send(email_data);
