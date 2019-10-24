const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/faq/:hash", (req, res) => {
    const language = req.params.hash;
    const faqs = `Select id, question, answer FROM faq WHERE language='${language}'`;
    db.execute(faqs)
        .then(results => {
            const myFaqs = results[0];
            res.json(myFaqs);
        })
        .catch(err => {
            throw err;
        });
});

router.post("/faq/addfaq", (req, res) => {
    const { language, question, answer } = req.query;
    const addFAQ = `INSERT INTO faq (question, answer, language) VALUES ('${question}', '${answer}', '${language}')`;
    db.execute(addFAQ).then(() => {
        const selectFAQ = `SELECT id, question FROM faq WHERE language='${language}'`;
        db.execute(selectFAQ).then(results => {
            const myFaqs = results[0];
            res.json(myFaqs);
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

router.post("/faq/updatefaq", (req, res) => {
    const { id, language, question, answer } = req.query;
    const updateFAQ = `UPDATE faq SET question="${question}", answer="${answer}" WHERE id="${id}"`;
    db.execute(updateFAQ).then(() => {
        const selectFAQ = `SELECT id, question FROM faq WHERE language='${language}'`;
        db.execute(selectFAQ).then(results => {
            const myFaqs = results[0];
            res.json(myFaqs);
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

router.post("/faq/deletefaq", (req, res) => {
    const { id, language } = req.query;
    const deleteFAQ = `DELETE * FROM faq WHERE id="${id}"`;
    db.execute(deleteFAQ).then(() => {
        const selectFAQ = `SELECT id, question FROM faq WHERE language='${language}'`;
        db.execute(selectFAQ).then(results => {
            const myFaqs = results[0];
            res.json(myFaqs);
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
