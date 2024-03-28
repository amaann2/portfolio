const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const globalErrorController = require("./Controller/globalErrorController");
const projectRoute = require("./Routes/projectRoute");
const educationRoute = require("./Routes/educationRoute");
const skillRoute = require("./Routes/skillRoute");
const userRoute = require("./Routes/userRoute");
const aboutRoute = require("./Routes/aboutRoute");
const { sendMail } = require("./Controller/emailController");
const path = require("path");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const { getPublication } = require("./Controller/publicationController");
app.use(cookieParser());
app.use(
  cors({
    origin: "https://amaan-tc7y.onrender.com/",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(compression());

app.use("/api/v1/education", educationRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/about", aboutRoute);
app.post("/api/v1/contact", sendMail);
app.get("/api/v1/publications", getPublication);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(globalErrorController);

module.exports = app;

// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
// });
