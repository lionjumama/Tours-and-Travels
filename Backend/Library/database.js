const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vishalpal:8160847738@cluster69.98yvh.mongodb.net/?retryWrites=true&w=majority&appName=cluster69', {
      // Deprecated options removed
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

