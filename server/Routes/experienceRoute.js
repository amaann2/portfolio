const express = require("express");
const {
  getAllExperience,
  createExperience,
  getSingleExperience,
  deleteExperience,
  updateExperience,
} = require("../Controller/experienceController");
const router = express.Router();

router.route("/").get(getAllExperience).post(createExperience);
router
  .route("/:id")
  .get(getSingleExperience)
  .delete(deleteExperience)
  .patch(updateExperience);
module.exports = router;
