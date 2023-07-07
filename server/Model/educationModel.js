const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
  degree: {
    type: String,
    required: [true, "A education must have a degree"],
  },
  from: {
    type: Number,
  },
  to: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
  instituteName: {
    type: String,
    requierd: [true, "a education must have a institute name"],
  },
  fieldOfStudy: {
    type: String,
    required: [true, "a education must have a field of study"],
  },
});
const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
