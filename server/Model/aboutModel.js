const mongoose = require("mongoose");
const aboutSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    required: [true, "A user must have a email"],
  },
  summary: {
    type: String,
  },
  photo: {
    type: String,
  },
  aboutMe: [String],
  linkedin: String,
  github: String,
  instagram: String,
  phone: Number,
  twitter: String,
});
const About = mongoose.model("About", aboutSchema);

module.exports = About;
