const express = require('express');
const scanController = require('../controllers/scanController');

const router = express.Router();

router.post('/scan', scanController.scanQRCode);

module.exports = router;
