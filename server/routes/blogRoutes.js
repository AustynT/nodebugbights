const mongoose = require("mongoose");
const BlogPost = mongoose.model("blogPost");

module.exports = app => {
  app.post("/blogs/new", async (req, res) => {
    const blogProps = req.body;
    BlogPost.create(blogProps).then(blog => res.send(blog));
  });

  app.get("/blogs", async (req, res, next) => {
    const blogProps = req.body;
    BlogPost.findOne(blogProps).then(blog => res.send(blog));
  });
};
