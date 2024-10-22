const express = require('express');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const User = require('../Models/User'); // Ensure this path is correct
const contactForm = require("../Controller/email")
const router = express.Router();

//contact Us
router.route('/contact').post(contactForm);

// Register a new user
// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, phone, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user with hashed password
//     user = new User({
//       username,
//       email,
//       phone,
//       password: hashedPassword, // Save the hashed password
//     });

//     await user.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// });




module.exports = router;


