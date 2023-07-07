const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Project must have a title"],
  },
  description: {
    type: String,
    required: [true, "A Project must have a description"],
  },
  imageCover: {
    type: String,
  },
  tools: [String],
  githubUrl: {
    type: String,
  },
  deployUrl: {
    type: String,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
