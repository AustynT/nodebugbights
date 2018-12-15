const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScema = new Scema({
  email: {
    type: String,
    required: [true, "email is required"]
  },
  firstName: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "Name must be longer than three charaters"
    },
    required: [true, "first name is required to make an account"]
  },
  lastName: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "Name must be longer than three charaters"
    },
    required: [true, "Last name is required to make an account"]
  },
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blogPost"
    }
  ]
});

const User = mongoose.model("user", UserScema);

module.exports;
