const express = require("express");
const {
  getAllSkill,
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
} = require("../Controller/skillController");

const router = express.Router();

router.route("/").get(getAllSkill).post(createSkill);
router.route("/:id").get(getSkill).patch(updateSkill).delete(deleteSkill);

module.exports = router;
