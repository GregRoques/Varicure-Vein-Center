const express = require("express");
const router = express.Router();
const db = require("../util/database");

router.post("/login", (req, res, next) => {
    const { email, password } = req.body;
});

module.exports = router;
