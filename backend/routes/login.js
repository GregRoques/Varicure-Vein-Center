const express = require("express");
const router = express.Router();
const db = require("../util/database");
const bcrypt = require("bcrypt");
const randToken = require("rand-token");

router.post("/login", (req, res, next) => {
    const { email, password } = req.body;
    const emailFormat = email.toLowerCase();
    const userQuery = `Select userId, email, hash FROM users WHERE email="${emailFormat}`;
    db.execute(userQuery).then(res => {
        if (res.length === 0) {
            res.json({
                msg: "Email Invalid"
            });
        } else {
            const { userId, email, hash } = res[0];
            const checkHash = bcrypt.compareSync(password, hash);
            if (checkHash) {
                const token = randToken.uid(50);
                const updateUserToken = `UPDATE users SET idToken="${token}" WHERE email="${email}`;
                db.execute(updateUserToken).then(() =>
                    res.json({
                        userId,
                        email,
                        idtoken: token
                    })
                ).catch(err => { throw err; });
            } else {
                res.json({
                    msg: "Password Invalid"
                });
            };
        }
    });
});

module.exports = router;
