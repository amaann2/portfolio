const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database is connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnection;
