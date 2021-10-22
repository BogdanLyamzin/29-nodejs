const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;
console.log(EMAIL_PASSWORD);
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

const sendEmail = async(data)=> {
    const newEmail = {
        ...data,
        from: "info@ntonyartist.com"
    };
    try {
        await transporter.sendMail(newEmail);
    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail