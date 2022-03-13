const mailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "085ef26a5d3ef4",
    pass: "bf4fdd62369ee7",
  },
};

function generateMail(from, to, subject, text) {
  return {
    from: from,
    to: to,
    subject: subject,
    text: text,
  };
}

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

send(
  generateMail(
    "seoksuho@gmail.com",
    "turbogara1@gmail.com",
    "테스트 메일입니다",
    "테스트 내용입니다"
  )
);
