const catchAsyncError = require("../Utils/catchAsyncError");
const nodemailer = require("nodemailer");

exports.sendMail = catchAsyncError(async (req, res, next) => {
  var name = req.body.name;
  var from = req.body.email;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: from,
    to: process.env.EMAIL_USERNAME,
    subject: "Portfolio Contact Form",
    text: `Name: ${name}\nEmail: ${from}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      res.status(400).json({
        status: "success",
        message: error,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Email Sent successfully",
      });
    }
  });
});
