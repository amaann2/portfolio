const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");
const Project = require("../Model/projectModel");

exports.getAllProject = getAll(Project);
exports.createProject = createOne(Project);
exports.getProject = getOne(Project);
exports.updateProject = updateOne(Project);
exports.deleteProject = deleteOne(Project);
