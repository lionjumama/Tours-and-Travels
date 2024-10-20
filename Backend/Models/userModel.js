const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Additional fields like name, phone number, etc.
});

module.exports = mongoose.model('User', userSchema);


