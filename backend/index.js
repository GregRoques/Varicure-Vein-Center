const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const reviews = require("./routes/reviews");
const myContacts = require("./routes/personalData");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(reviews);
app.use(myContacts);

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
