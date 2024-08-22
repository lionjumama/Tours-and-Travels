const express = require('express');
const User = require('../Models/User'); // Ensure this path is correct
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({ username, email, phone, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

