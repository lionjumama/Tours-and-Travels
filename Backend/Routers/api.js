const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/tours', (req, res) => {
  res.send('List of tours');
});

router.post('/book', (req, res) => {
  res.send('Booking confirmed');
});

// Other routes...

module.exports = router;
