const express = require('express');
const checkinController = require('../controllers/checkinController.js');

const router = express.Router();
router.post('/:user_id/:location', checkinController.checkin);

module.exports = router;
