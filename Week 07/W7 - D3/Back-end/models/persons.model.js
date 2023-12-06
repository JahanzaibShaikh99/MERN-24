const mongoose = require("mongoose");

const personsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: true
  },
});

const personsModel = mongoose.model('Persons', personsSchema);

module.exports = personsModel;
