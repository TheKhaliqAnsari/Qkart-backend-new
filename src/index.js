const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
require("dotenv").config();

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Mongoose DB Connected Successfully!!!");
  })
  .catch((err) => console.log("Error while connecting to DB", err));


  app.listen(config.port, () => {
    console.log("Server is running at: ", config.port)
  })