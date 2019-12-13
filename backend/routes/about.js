const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/about/:hash", (req, res) => {
    const language = req.params.hash;
    const about = `Select id, question, answer FROM about WHERE language='${language}'`;
    db.execute(about)
        .then(results => {
            const myAbouts = results[0];
            res.json(myAbouts);
        })
        .catch(err => {
            throw err;
        });
});

// router.post("/about/addAbout", (req, res) => {
//     const { language, question, answer } = req.query;
//     const addAbout = `INSERT INTO about (question, answer, language) VALUES ('${question}', '${answer}', '${language}')`;
//     db.execute(addAbout).then(() => {
//         const selectAbout = `SELECT id, question FROM about WHERE language='${language}'`;
//         db.execute(selectAbout).then(results => {
//             const myAbouts = results[0];
//             res.json(myAbouts);
//         }).catch(err => {
//             if (err) {
//                 throw err;
//             }
//         });
//     }).catch(err => {
//         if (err) {
//             throw err;
//         }
//     });
// });

// router.post("/about/updateabout", (req, res) => {
//     const { id, language, question, answer } = req.query;
//     const updateAbout = `UPDATE about SET question="${question}", answer="${answer}" WHERE id="${id}"`;
//     db.execute(updateAbout).then(() => {
//         const selectAbout = `SELECT id, question FROM about WHERE language='${language}'`;
//         db.execute(selectAbout).then(results => {
//             const myAbouts = results[0];
//             res.json(myAbouts);
//         }).catch(err => {
//             if (err) {
//                 throw err;
//             }
//         });
//     }).catch(err => {
//         if (err) {
//             throw err;
//         }
//     });
// });

// router.post("/about/deleteabout", (req, res) => {
//     const { id, language } = req.query;
//     const deleteAbout = `DELETE * FROM about WHERE id="${id}"`;
//     db.execute(deleteAbout).then(() => {
//         const selectAbout = `SELECT id, question FROM about WHERE language='${language}'`;
//         db.execute(selectAbout).then(results => {
//             const myAbouts = results[0];
//             res.json(myAbouts);
//         }).catch(err => {
//             if (err) {
//                 throw err;
//             }
//         });
//     }).catch(err => {
//         if (err) {
//             throw err;
//         }
//     });
// });

module.exports = router;
