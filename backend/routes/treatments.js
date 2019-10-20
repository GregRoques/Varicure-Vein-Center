const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/treatments/:hash", (req, res) => {
    const language = req.params.hash;
    const treatmentList = `Select treatment, whatItIs, usedFor, toExpect, recovery FROM treatments WHERE language='${language}'`;
    db.execute(treatmentList)
        .then(results => {
            const treatmentResults = results[0];
            res.json(treatmentResults);
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
