const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const globalErrorController = require("./Controller/globalErrorController");
const blogsRoute = require("./Routes/blogsRoute");
const projectRoute = require("./Routes/projectRoute");
const educationRoute = require("./Routes/educationRoute");
const skillRoute = require("./Routes/skillRoute");
const userRoute = require("./Routes/userRoute");
const aboutRoute = require("./Routes/aboutRoute");
const { sendMail } = require("./Controller/emailController");
const AppError = require("./Utils/appError");
const path = require("path");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
app.use("*", cors());
app.use(express.json());

const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: " Too many Requests from this IP, please try again in an hour !",
});

app.use("/api", limiter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(compression());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/v1/education", educationRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/blogs", blogsRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/about", aboutRoute);
app.post("/api/v1/contact", sendMail);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(globalErrorController);

module.exports = app;

// app.use(express.static(`${__dirname}/public/img/`));
// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
// });
