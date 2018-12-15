require("./models/BlogPost");
require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost/bugbites");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

require("./routes/blogRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
