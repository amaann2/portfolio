const dbConnection = require("./Config/db");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//* connection to database
dbConnection();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} Port at ${process.env.NODE_ENV} mode`);
});
