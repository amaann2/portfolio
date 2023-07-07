const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "a skill must have a name"],
  },
  image: {
    type: String,
    // required: [true, "a skill must have a image"],
  },
  profiencyLevel: {
    type: String,
  },
});
const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;