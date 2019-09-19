const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/reviews", (req, res) => {
    const count = `SELECT count( id ) FROM Reviews`;
    db.execute(count)
        .then(results => {
            const max = (Object.values(results[0][0])[0]);
            const random1 = Math.floor(Math.random() * max) + 1;
            const random2 = Math.floor(max / 2) >= random1 ? (random1 + 1) : (random1 - 1);
            const twoIds = [random1, random2];
            const customerReview = `Select review, name, url, social FROM reviews WHERE id IN (${twoIds})`;
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
