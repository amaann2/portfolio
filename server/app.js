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
const { sendMail } = require("./Controller/emailController");

app.use("*", cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(`${__dirname}/public/img`));

app.use("/api/v1/education", educationRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/blogs", blogsRoute);
app.use("/api/v1/users", userRoute);
app.post("/contact", sendMail);

app.use(globalErrorController);

module.exports = app;
