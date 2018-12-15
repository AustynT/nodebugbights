const mongoose = require("mongoose");
const BlogPost = mongoose.model("blogPost");

module.exports = app => {
  app.post("/blogs", async (req, res, next) => {
    const blogProps = req.body;
    console.log(blogProps);
    BlogPost.create(blogProps)
      .then(blog => res.send(blog))
      .catch(next);
  });
};
