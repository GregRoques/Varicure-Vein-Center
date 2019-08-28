const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const routing = require("./routes/routing");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routing);

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
