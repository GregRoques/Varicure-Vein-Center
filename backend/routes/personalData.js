const express = require("express");
const router = express.Router();
const db = require("../util/database");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgridApi.js");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));

const DataError = props => {
    transporter.sendMail({
        to: "LilNacheauxNOLA@gmail.com",
        from: "LilNacheauxNOLA@gmail.com",
        subject: "Error saving user data to backend",
        html: `<b>Date:</b> ${new Date().toISOString().slice(0, 10)}<br/><br/>
        ${props ? props.name + ", " + props.email + ", " + props.phone : null}`
    });
};

const phoneFormat = ph => {
    if (ph.length >= 10) {
        const onlyNumbers = ph.replace(/\D/g, "");
        const newNumber = onlyNumbers.slice(0, 3) + "-" + onlyNumbers.slice(3, 6) + "-" + onlyNumbers.slice(6);
        return newNumber;
    } else {
        return 0;
    }
};

const yearMonth = new Date().toISOString().slice(0, 7);

router.post("/personalData", (req, res, next) => {
    const { name, email, phone, contact, message, services } = req.body;
    const phoneEdit = phoneFormat(phone);

    transporter.sendMail({
        to: "LilNacheauxNOLA@gmail.com",
        from: email,
        subject: `${name} has a question about ${services}`,
        html: `<b>From:</b> ${name} <br/> 
        <b>Email:</b> ${email} <br/>
        ${phoneEdit.length > 2 ? "<b>Phone:</b> " + phoneEdit + "<br/><b>Preferred Contact:</b> " + contact + "<br/>" : null}
        <b>Date:</b> ${new Date().toISOString().slice(0, 10)} <br/><br/>
        ${message}`
    }).then(() => {
        res.json("Yes");
        next();
    }).catch(() => {
        res.json("No");
    });
});

router.post("/personalData", (req, res, next) => {
    const { email } = req.body;
    const isEmailAlready = `SELECT email FROM personalData WHERE email="${email}"`;
    db.execute(isEmailAlready).then(results => {
        if (!results[0][0]) {
            next();
        } else {
            const updateDate = `UPDATE personalData SET date="${yearMonth}" WHERE email="${email}"`;
            db.execute(updateDate).then(() => {
                console.log("Updated date where email already exists.");
            }).catch(() => {
                DataError();
            });
        }
    }).catch(() => {
        DataError();
    });
});

router.post("/personalData", (req, res) => {
    const { name, email, phone, contact } = req.body;
    const phoneEdit = phoneFormat(phone);

    const addNewInfo = `INSERT INTO personalData (email, name, phone, preference, date) VALUES ("${email}", "${name}", "${phoneEdit}", "${contact}", "${yearMonth}")`;
    db.execute(addNewInfo).then(() => {
        console.log("Update Successful");
    }).catch(() => {
        DataError(name, email, phone);
    });
});

module.exports = router;
