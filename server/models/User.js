const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScema = new Schema({
  googleId: String
});

const User = mongoose.model("users", UserScema);

module.exports;
