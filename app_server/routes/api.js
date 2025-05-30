const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

// GET /api/trips
router.get('/trips', apiController.getTrips);

module.exports = router;
