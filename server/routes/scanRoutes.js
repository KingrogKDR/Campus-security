const express = require('express');
const scanController = require('../controllers/scanController');

const router = express.Router();

router.post('/', scanController.scanQRCode);

module.exports = router;
