const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./Routers/authRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Tours and Travels API Baby');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
