const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const reviews = require("./routes/reviews");
const myContacts = require("./routes/personalData");
// const login = require("./routes/login");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(reviews);
app.use(myContacts);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
}); // So this is a solution if you build in your folder with the react project in it. You can run npm build then run node on the server and it should serve your pages from waht I can tell!

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
