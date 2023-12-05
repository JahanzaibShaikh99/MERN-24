const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  usernNme: {
    type: String,
    required: [true, "Please enter the USername"],
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
});

const personModel = mongoose.model("person", personSchema);

module.exports = personModel;
