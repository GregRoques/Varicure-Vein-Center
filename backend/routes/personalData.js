const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgridApi.js");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));

const phoneFormat = ph => {
    if (ph.length >= 10) {
        const onlyNumbers = ph.replace(/\D/g, "");
        const newNumber = onlyNumbers.substring(0, 3) + "-" + onlyNumbers.substring(3, 6) + "-" + onlyNumbers.substring(6, 10);
        return newNumber;
    } else {
        return 0;
    }
};


router.post("/", (req, res, next) => {
    const { name, email, phone, message, subject } = req.body;
    const phoneEdit = phoneFormat(phone);
    const sendDate = new Date().toISOString().slice(0, 10);

    transporter.sendMail({
        to: "greg@gregroques.com",
        from: email,
        subject: `${subject}`,
        html: `<b>From:</b> ${name} <br/> 
        <b>Email:</b> ${email} <br/>
        ${phoneEdit.length > 2 ? "<b>Phone:</b> " + phoneEdit + "<br/>" : ""}
        <b>Date:</b> ${sendDate} <br/><br/>
        ${message}`
    }).then(() => {
        res.json("Yes");
    }).catch(() => {
        res.json("No");
    });
});

module.exports = router;
