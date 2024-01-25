const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const app = require("./app");

// DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE_URL)
  .then((conn) => {
    console.log("database connected successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server has started!");
});
