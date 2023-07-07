const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    required: [true, "A user must have a email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide you email address"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "A user must have a confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords are not the same !",
    },
  },
  photo: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  linkedin: String,
  github: String,
  instagram: String,
  phone: Number,
  twitter: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
