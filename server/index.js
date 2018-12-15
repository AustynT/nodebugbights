const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bugbites");

const app = express();

app.get("/", (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
