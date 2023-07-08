const catchAsyncError = require("../Utils/catchAsyncError");
const AppError = require("./../Utils/appError");

exports.createOne = (Model) =>
  catchAsyncError(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.getAll = (Model) =>
  catchAsyncError(async (req, res) => {
    const doc = await Model.find();
    res.status(200).json({
      status: "sucess",
      result: doc.length,
      data: doc,
    });
  });

exports.getOne = (Model) =>
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findById(id);

    if (!doc) {
      return next(new AppError("No Document found with that id", 404));
    }

    res.status(200).json({
      status: "Success",
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No Document found with that id", 404));
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.deleteOne = (Model) =>
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);

    if (!doc) {
      return next(new AppError("No Document found with that id", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
