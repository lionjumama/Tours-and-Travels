const express = require('express');
const bcrypt = require('bcryptjs'); // Ensure bcryptjs is installed
const User = require('../Models/User'); // Ensure this path is correct
const authController = require("../Controller/authController");
const router = express.Router();

router.route('/login').post(authController.signIn);
// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Basic validation
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      phone,
      password: hashedPassword,
    });

   const userCreated = await user.save();

    res.status(201).json({ message: userCreated });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message }); // Return detailed error
  }
});

// Route to get all users (admin view)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message }); // Return detailed error
  }
});

module.exports = router;





