const catchAsyncError = require("../Utils/catchAsyncError");
const User = require("./../Model/userModel");
const appError = require("../Utils/appError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { getOne } = require("./handleFactory");
const signInToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signInToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
    cookieOptions.sameSite = "none";
  }
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    data: { user },
  });
};
exports.signup = catchAsyncError(async (req, res) => {
  const user = await User.create(req.body);

  createSendToken(user, 200, res);
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new appError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new appError("Incorrect Email and Password", 401));
  }
  createSendToken(user, 200, res);
});

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "jwt") {
        token = value;
        break;
      }
    }
  }
  if (!token) {
    return next(
      new appError("You are not logged in! please log  in to access", 401)
    );
  }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // TODO: Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new appError("The user belong to this token does no longer exists", 401)
    );
  }
  req.user = freshUser;
  next();
});
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("jwt", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "Logout Successfull",
  });
});

exports.getUser = getOne(User);
