const Education = require("../Model/educationModel");
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");

exports.getAllEducation = getAll(Education);
exports.getEducation = getOne(Education);
exports.createEducation = createOne(Education);
exports.updateEducation = updateOne(Education);
exports.deleteEducation = deleteOne(Education);
