const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/faq/:hash", (req, res) => {
    const language = req.param.hash;
    const faqs = `Select question, answer FROM faq WHERE language='${language}`;
    db.execute(faqs)
        .then(results => {
            const myFaqs = (Object.values(results));
            res.json(myFaqs);
        })
        .catch(err => {
            throw err;
        });
});

module.exports = router;
