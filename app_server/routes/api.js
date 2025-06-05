const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

// GET all trips
router.get('/trips', apiController.getTrips);

// GET trip by ID
router.get('/trips/:id', apiController.getTripById);

module.exports = router;
