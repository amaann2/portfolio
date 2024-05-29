const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
  company: {
    type: String,
    required: [true, "An experience must have a company name"],
  },
  position: {
    type: String,
    required: [true, "An experience must have a position"],
  },
  location: {
    type: String,
  },
  startYear: {
    type: String,
    required: [true, "An experience must have a start date"],
  },
  endYear: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: [String],
});
const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
