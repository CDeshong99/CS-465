const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

router.get('/', travelController.index);

module.exports = router;
