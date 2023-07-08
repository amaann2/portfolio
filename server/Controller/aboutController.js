const About = require("./../Model/aboutModel");
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.createAbout = createOne(About);
exports.getAllAbout = getAll(About);
exports.getAbout = getOne(About);
exports.updateAbout = updateOne(About);
exports.deleteAbout = deleteOne(About);
