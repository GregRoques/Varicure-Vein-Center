const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.get("/treatments/:hash", (req, res) => {
    const language = req.params.hash;
    const selectTreatments = `SELECT id, treatment, whatItIs, usedFor, toExpect, recovery FROM treatments WHERE language='${language}'`;
    db.execute(selectTreatments)
        .then(results => {
            const myTreatments = results[0];
            res.json(myTreatments);
        })
        .catch(err => {
            throw err;
        });
});

// router.post("/treaments/addtreaments", (req, res) => {
//     const { treatment, whatItIs, usedFor, toExpect, recovery, language } = req.query;
//     const addtreaments = `INSERT INTO treaments (treatment, whatItIs, usedFor, toExpect, recovery, language) VALUES ('${treatment}', '${whatItIs}', '${usedFor}', '${toExpect}', '${recovery}', '${language}')`;
//     db.execute(addtreaments).then(() => {
//         const selectTreatments = `SELECT id, treatment, whatItIs, usedFor, toExpect, recovery FROM treaments WHERE language='${language}'`;
//         db.execute(selectTreatments).then(results => {
//             const myTreatments = results[0];
//             res.json(myTreatments);
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

// router.post("/treaments/updatetreaments", (req, res) => {
//     const { id, treatment, whatItIs, usedFor, toExpect, recovery, language } = req.query;
//     const updateTreaments = `UPDATE treaments SET treatment="${treatment}", whatItIs="${whatItIs}", usedFor="${usedFor}", toExpect="${toExpect}, recovery="${recovery}" WHERE id="${id}"`;
//     db.execute(updateTreaments).then(() => {
//         const selectTreatments = `SELECT id, treatment, whatItIs, usedFor, toExpect, recovery FROM treaments WHERE language='${language}'`;
//         db.execute(selectTreatments).then(results => {
//             const myTreatments = results[0];
//             res.json(myTreatments);
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

// router.post("/treaments/deletetreaments", (req, res) => {
//     const { id, language } = req.query;
//     const deleteTreatments = `DELETE * FROM treaments WHERE id="${id}"`;
//     db.execute(deleteTreatments).then(() => {
//         const selectTreatments = `SELECT id, treatment, whatItIs, usedFor, toExpect, recovery FROM treaments WHERE language='${language}'`;
//         db.execute(selectTreatments).then(results => {
//             const myTreatments = results[0];
//             res.json(myTreatments);
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
