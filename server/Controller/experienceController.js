const Experience = require("../Model/experienceModel");
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");

exports.getAllExperience = getAll(Experience);
exports.getSingleExperience = getOne(Experience);
exports.createExperience = createOne(Experience);
exports.updateExperience = updateOne(Experience);
exports.deleteExperience = deleteOne(Experience);
