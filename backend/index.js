const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
// const { createProxyMiddleware } = require("http-proxy-middleware");

const myContacts = require("./routes/personalData");

const app = express();

const corsOptions = {
    origin: "http://www.varicureveincenter.com"
};

app.use(cors(corsOptions));
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(myContacts);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.use(
//     "/personalData",
//     createProxyMiddleware({
//         target: "http://localhost:2000",
//         changeOrigin: true
//     }));

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
