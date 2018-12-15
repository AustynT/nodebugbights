const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  subtile: String,
  body: String
});

const BlogPost = mongoose.model("blogPost", BlogPostSchema);

module.exports = BlogPost;
