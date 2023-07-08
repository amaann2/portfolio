const express = require("express");
const {
  getAllEducation,
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
} = require("../Controller/educationController");
const { protect } = require("../Controller/authController");

const router = express.Router();

router.route("/").get(getAllEducation).post(protect, createEducation);
router
  .route("/:id")
  .get(getEducation)
  .patch(protect, updateEducation)
  .delete(protect, deleteEducation);

module.exports = router;
