require("./models/BlogPost");
require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const app = express();

mongoose.connect("mongodb://localhost/bugbites");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
app.get("/auth/google/callback", passport.authenticate("google"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

require("./routes/blogRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
