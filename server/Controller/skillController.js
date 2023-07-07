const Skill = require("../Model/skillModel");
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");

exports.getAllSkill = getAll(Skill);
exports.getSkill = getOne(Skill);
exports.createSkill = createOne(Skill);
exports.updateSkill = updateOne(Skill);
exports.deleteSkill = deleteOne(Skill);
