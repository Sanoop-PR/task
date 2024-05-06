const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: [true, "Enter email"],
    unique: [true, "User with email already exist"],
  },
  password: {
    type: String,
    minLength: 6,
  }
});

module.exports = new mongoose.model("User", userSchema);
