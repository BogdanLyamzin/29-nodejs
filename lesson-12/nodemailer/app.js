const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "mail.adm.tools",
    port: 465, // 25 2525 465
    secure: true,
    auth: {
        user: "info@ntonyartist.com",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "info@ntonyartist.com",
    subject: "Новая заявка с сайта",
    html: `<p>Пришел заказ с сайта</p>`
};

transporter.sendMail(email)
    .then(()=> console.log("Email success send"))
    .catch((error)=> console.log(error.message))