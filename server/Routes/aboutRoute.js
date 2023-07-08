const express = require("express");
const {
  createAbout,
  getAllAbout,
  updateAbout,
  deleteAbout,
  getAbout,
} = require("./../Controller/aboutController");
const { protect } = require("../Controller/authController");
const router = express.Router();

router.route("/").get(getAllAbout).post(createAbout);
router.route("/:id").patch(protect, updateAbout).delete(protect, deleteAbout);
module.exports = router;
