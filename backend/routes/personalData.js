const express = require("express");
const router = express.Router();
const db = require("../util/database");
// const nodemailer = require("nodemailer");
// https://www.w3schools.com/nodejs/nodejs_email.asp

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
    const { email } = req.body;
    const isEmailAlready = `SELECT email FROM personalData WHERE email="${email}"`;
    db.execute(isEmailAlready).then(results => {
        if (!results[0][0]) {
            next();
        } else {
            const updateDate = `UPDATE personalData SET date="${yearMonth}" WHERE email="${email}"`;
            db.execute(updateDate).then(results2 => {
                console.log("Updated date where email already exists.");
            }).catch(err2 => {
                throw err2;
            });
        }
    }).catch(err => {
        throw err;
    });
});

router.post("/personalData", (req, res) => {
    const { name, email, phone, contact } = req.body;
    const phoneEdit = phoneFormat(phone);

    const addNewInfo = `INSERT INTO personalData (email, name, phone, preference, date) VALUES ("${email}", "${name}", "${phoneEdit}", "${contact}", "${yearMonth}")`;
    db.execute(addNewInfo).then(result => {
        console.log("Update Successful");
    }).catch(err => {
        throw err;
    });
});

module.exports = router;
