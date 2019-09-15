const express = require("express");
const router = express.Router();
const db = require("../util/database");
const bcrypt = require("bcrypt");
const randToken = require("rand-token");

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const emailFormat = email.toLowerCase();
    const userQuery = `Select email, userId, hash FROM users WHERE email="${emailFormat}"`;
    db.execute(userQuery).then(results => {
        if (results[0].length === 0) {
            res.json({
                msg: "Email Invalid"
            });
        } else {
            const { userId, email, hash } = results[0][0];
            const checkHash = bcrypt.compareSync(password, hash);
            if (checkHash) {
                const token = randToken.uid(50);
                const updateUserToken = `UPDATE users SET idToken="${token}" WHERE email="${email}"`;
                db.execute(updateUserToken).catch(err2 => { throw err2; });
                res.json({
                    userId,
                    email,
                    idtoken: token
                });
            } else {
                res.json({
                    msg: "Password Invalid"
                });
            }
        }
    }).catch(err => {
        throw err;
    });
});

module.exports = router;
