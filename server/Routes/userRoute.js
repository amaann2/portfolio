const express = require("express");
const {
  signup,
  login,
  logout,
  getMe,
  getUser,
  protect,
} = require("../Controller/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me", protect, getMe, getUser);

module.exports = router;
