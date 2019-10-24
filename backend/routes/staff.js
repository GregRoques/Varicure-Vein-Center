const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/staff/:hash", (req, res) => {
    const language = req.params.hash;
    const selectStaff = `Select name, title, bio FROM staff WHERE language='${language}'`;
    db.execute(selectStaff)
        .then(results => {
            const myStaff = results[0][0];
            res.json(myStaff);
        })
        .catch(err => {
            throw err;
        });
});

router.post("/staff/updatestaff", (req, res) => {
    const { name, title, bio, language } = req.query;
    const updateStaff = `UPDATE staff SET name="${name}", title="${title}", bio="${bio}" WHERE language="${language}"`;
    db.execute(updateStaff).then(() => {
        const selectStaff = `SELECT name, title, bio FROM staff WHERE language='${language}'`;
        db.execute(selectStaff).then(results => {
            const myStaff = results[0][0];
            res.json(myStaff);
        }).catch(err => {
            if (err) {
                throw err;
            }
        });
    }).catch(err => {
        if (err) {
            throw err;
        }
    });
});

module.exports = router;
