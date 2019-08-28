const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "Vericure",
    password: "Nacheaux1"
});

module.exports = pool.promise();
