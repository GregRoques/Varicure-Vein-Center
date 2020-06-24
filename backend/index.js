const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const instaImages = require("./routes/instaImages");
const myContacts = require("./routes/personalData");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const myBackend = "/backend";
app.use(`${myBackend}/instaImages`, instaImages);
app.use(`${myBackend}/personalData`, myContacts);

app.use(express.static(path.join(__dirname, "public")));
app.get(`/*`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
