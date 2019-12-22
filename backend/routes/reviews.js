const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/reviews", (req, res) => {
    const count = `SELECT count( id ) FROM Reviews`;
    db.execute(count)
        .then(results => {
            const max = (Object.values(results[0][0])[0]);
            const random = Math.floor(Math.random() * max) + 1;
            const customerReview = `Select englishReview, spanishReview, name, url, social FROM reviews WHERE id='${random}'`;
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

// router.get("/reviews/allreviews/:hash", (req, res) => {
//     const language = req.params.language;
//     const selectReviews = `SELECT id, review, name, url, social FROM review WHERE language='${language}'`;
//     db.execute(selectReviews)
//         .then(results => {
//             const myReviews = results[0];
//             res.json(myReviews);
//         })
//         .catch(err => {
//             throw err;
//         });
// });

// router.post("reviews/addreview", (req, res, next) => {
//     const { review, name, url, social, language } = req.query;
//     const addReview = `INSERT INTO review (review, name, url, social) VALUES ('${review}', '${name}','${url}', '${social}', '${language}')`;
//     db.execute(addReview).then(() => {
//         const selectReviews = `SELECT id, review, name, url, social FROM review WHERE language='${language}'`;
//         db.execute(selectReviews).then(results => {
//             const myReviews = results[0];
//             res.json(myReviews);
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

// router.post("reviews/updatereview", (req, res) => {
//     const { review, name, url, social, id } = req.query;
//     const updateReview = `UPDATE review SET review="${review}", name="${name}", url="${url}", social="${social}" WHERE id="${id}"`;
//     db.execute(updateReview).then(res => {
//         console.log(`Success: ${res}`);
//     }).catch(err => {
//         if (err) {
//             throw err;
//         }
//     });
// });

// router.post("reviews/deletereview", (req, res) => {
//     const { id, language } = req.query;
//     const deleteReview = `DELETE * FROM reviews WHERE id="${id}"`;
//     db.execute(deleteReview).then(() => {
//         const selectReviews = `SELECT id, review, name, url, social FROM review WHERE language='${language}'`;
//         db.execute(selectReviews).then(results => {
//             const myReviews = results[0];
//             res.json(myReviews);
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
