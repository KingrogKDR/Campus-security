const express = require('express');
const router = express.Router();
const checkinController = require('../controllers/checkinController.js');

router.post('/:user_id/:location', checkinController.checkin);

module.exports = router;
