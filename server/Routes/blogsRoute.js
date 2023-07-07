const express = require("express");
const {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("./../Controller/blogController");
const router = express.Router();

router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);
module.exports = router;
