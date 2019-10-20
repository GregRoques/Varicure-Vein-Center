const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/staff/:hash", (req, res) => {
    const language = req.param.hash;
    const theStaff = `Select question, answer FROM staff WHERE language='${language}'`;
    db.execute(theStaff)
        .then(results => {
            const staffReturn = (Object.values(results));
            res.json(staffReturn);
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
