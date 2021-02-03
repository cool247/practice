const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

module.exports = mongoose.model("employee", employeeSchema);
