let mongoose = require("mongoose");
let uri = "mongodb://127.0.0.1:27017/my-db";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
