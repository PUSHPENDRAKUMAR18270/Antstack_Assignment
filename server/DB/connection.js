const mongoose = require("mongoose");
require('dotenv').config();

/*connects to database schedulerDB */
module.exports.connection = function () {
    mongoose.connect(process.env.PRODUCTION_MONGODB_URI ||
      process.env.DEVELOPMENT_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    mongoose.connection
      .once("open", function () {
        console.log("Database connection has been made");
      })
      .on("error", function (error) {
        console.log("error is" + error);
      });
  };