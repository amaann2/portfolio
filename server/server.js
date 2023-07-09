const dbConnection = require("./Config/db");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");


//* connection to database
dbConnection();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} Port at ${process.env.NODE_ENV} mode`);
});
