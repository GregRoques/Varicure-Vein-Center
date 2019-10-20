const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/treatments/:hash", (req, res) => {
    const language = req.param.hash;
    const treatmentList = `Select treatment, whatItIs, usedFor, toExpect, recovery FROM treatments WHERE language='${language}`;
    db.execute(treatmentList)
        .then(results => {
            const treatmentResults = (Object.values(results));
            res.json(treatmentResults);
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
