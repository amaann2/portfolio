const express = require("express");
const {
  getAllProject,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../Controller/projectController");
const { protect } = require("../Controller/authController");

const router = express.Router();
router.route("/").get(getAllProject).post(protect, createProject);
router
  .route("/:id")
  .get(getProject)
  .patch(protect, updateProject)
  .delete(protect, deleteProject);
module.exports = router;
