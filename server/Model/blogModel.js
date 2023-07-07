const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required in blog"],
  },
  imageCover: {
    type: String,
    // required: [true, "imageCover is required in blog"],
  },
  description: {
    type: String,
    required: [true, "Description is required in blog"],
  },
  tags: [String],
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
