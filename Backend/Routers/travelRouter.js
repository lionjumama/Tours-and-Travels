const express = require('express');
const router = express.Router();
const travelController = require('../Controller/travelController');

// Define routes
router.get('/', travelController.getAllTravels);

module.exports = router;

