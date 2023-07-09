const dbConnection = require("../Config/db");
const Education = require("../Model/educationModel");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Skill = require("../Model/skillModel");
const About = require("../Model/aboutModel");
const Project = require("../Model/projectModel");
dotenv.config({ path: "../Config/config.env" });
const education = JSON.parse(
  fs.readFileSync(`${__dirname}/education.json`, "utf-8")
);
const skill = JSON.parse(fs.readFileSync(`${__dirname}/skill.json`, "utf-8"));
const project = JSON.parse(
  fs.readFileSync(`${__dirname}/project.json`, "utf-8")
);
const about = JSON.parse(fs.readFileSync(`${__dirname}/about.json`, "utf-8"));

mongoose
  .connect("add connection string here then run this function", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const importData = async () => {
  try {
    await Education.create(education);
    await Skill.create(skill);
    await About.create(about);
    await Project.create(project);
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Education.deleteMany();
    await Skill.deleteMany();
    await About.deleteMany();
    await Project.deleteMany();
    console.log("data deleted successfully");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
