const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/reviews", (req, res) => {
    const count = `SELECT count( id ) FROM Reviews`;
    db.execute(count)
        .then(results => {
            const max = (Object.values(results[0][0])[0]);
            const random = Math.floor(Math.random() * max) + 1;
            const customerReview = `Select review, name, url FROM reviews WHERE id = ${random}`;
            db.execute(customerReview)
                .then(results2 => {
                    res.json(Object.values(results2[0])[0]);
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
