const express = require("express");
const {
  getAllSkill,
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
} = require("../Controller/skillController");
const { protect } = require("../Controller/authController");

const router = express.Router();

router.route("/").get(getAllSkill).post(protect, createSkill);
router
  .route("/:id")
  .get(getSkill)
  .patch(protect, updateSkill)
  .delete(protect, deleteSkill);

module.exports = router;
