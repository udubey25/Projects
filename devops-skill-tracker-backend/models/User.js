const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String },
  microsoftId: { type: String },
  githubId: { type: String },
  linkedinId: { type: String },
  name: { type: String },
  email: { type: String },
  photo: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
