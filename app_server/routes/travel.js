const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelerController');

router.get('/', travelController.travelList);

module.exports = router;
