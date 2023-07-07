const Blog = require("./../Model/blogModel");
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.createBlog = createOne(Blog);
exports.getAllBlog = getAll(Blog);
exports.getBlog = getOne(Blog);
exports.updateBlog = updateOne(Blog);
exports.deleteBlog = deleteOne(Blog);
