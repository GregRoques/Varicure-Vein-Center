const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/staff/:hash", (req, res) => {
    const language = req.params.hash;
    const theStaff = `Select name, title, bio FROM staff WHERE language='${language}'`;
    db.execute(theStaff)
        .then(results => {
            const staffReturn = results[0][0];
            res.json(staffReturn);
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
