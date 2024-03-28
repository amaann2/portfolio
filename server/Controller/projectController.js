const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");
const Project = require("../Model/projectModel");
const catchAsyncError = require("../Utils/catchAsyncError");

exports.getAllProject = catchAsyncError(async (req, res, next) => {
  const doc = await Project.find().sort({ createdAt: 1 });
  res.status(200).json({
    status: "sucess",
    result: doc.length,
    data: doc,
  });
});
exports.createProject = createOne(Project);
exports.getProject = getOne(Project);
exports.updateProject = updateOne(Project);
exports.deleteProject = deleteOne(Project);
