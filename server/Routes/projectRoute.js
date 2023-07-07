const express = require("express");
const {
  getAllProject,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../Controller/projectController");

const router = express.Router();
router.route("/").get(getAllProject).post(createProject);
router.route("/:id").get(getProject).patch(updateProject).delete(deleteProject);
module.exports = router;
