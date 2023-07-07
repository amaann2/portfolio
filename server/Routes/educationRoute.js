const express = require("express");
const {
  getAllEducation,
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
} = require("../Controller/educationController");

const router = express.Router();

router.route("/").get(getAllEducation).post(createEducation);
router
  .route("/:id")
  .get(getEducation)
  .patch(updateEducation)
  .delete(deleteEducation);
  
module.exports = router;
