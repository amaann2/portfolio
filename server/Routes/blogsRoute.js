const express = require("express");
const {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("./../Controller/blogController");
const { protect } = require("../Controller/authController");
const router = express.Router();

router.route("/").get(getAllBlog).post(protect, createBlog);
router
  .route("/:id")
  .get(getBlog)
  .patch(protect, updateBlog)
  .delete(protect, deleteBlog);
module.exports = router;
