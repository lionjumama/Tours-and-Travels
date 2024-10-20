const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./Routers/authRoutes');
const emailRoutes = require('./Controller/email');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:2170",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/email', emailRoutes); // Ensure correct path for email routes

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Tours and Travels API!');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.message);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

