const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
  destination: String,
  price: Number,
});

module.exports = mongoose.model('Travel', TravelSchema);
