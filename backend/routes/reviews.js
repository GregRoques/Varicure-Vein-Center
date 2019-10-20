const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/reviews/:hash", (req, res) => {
    const count = `SELECT count( id ) FROM Reviews`;
    const language = req.params.hash;
    console.log(language);
    db.execute(count)
        .then(results => {
            const max = (Object.values(results[0][0])[0]);
            const random = Math.floor(Math.random() * max) + 1;
            const customerReview = `Select review, name, url, social FROM reviews WHERE id='${random}' AND language='${language}'`;
            db.execute(customerReview)
                .then(results2 => {
                    const twoReviews = (Object.values(Object.values(results2)[0]));
                    res.json(twoReviews);
                })
                .catch(err2 => {
                    throw err2;
                });
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
