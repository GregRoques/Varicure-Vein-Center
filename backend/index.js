const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const reviews = require("./routes/reviews");
const myContacts = require("./routes/personalData");
const login = require("./routes/login");
const treatments = require("./routes/treatments");
const faq = require("./routes/faq");
const staff = require("./routes/staff");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(reviews);
app.use(myContacts);
app.use(login);
app.use(treatments);
app.use(faq);
app.use(staff);

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
