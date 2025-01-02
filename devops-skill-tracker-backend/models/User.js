const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String },
  googleId: { type: String },
  microsoftId: { type: String },
  githubId: { type: String },
  linkedinId: { type: String },
});

module.exports = mongoose.model("User", userSchema);
