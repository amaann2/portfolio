const catchAsyncError = require("../Utils/catchAsyncError");
const User = require("./../Model/userModel");
exports.signup = catchAsyncError(async (req, res) => {
  const user = await User.create(req.body);

  res.status(200).json({
    status: "success",
    data: { user },
  });
});
exports.login = catchAsyncError(async (req, res) => {});
