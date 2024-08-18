const express = require('express');
const connectDB = require('./Library/database');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/travel', require('./Routers/travelRouter'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Tours and Travels API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
