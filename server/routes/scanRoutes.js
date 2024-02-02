const express = require('express');
const scanController = require('../controllers/scanControllers');

const scanRouter = express.Router();

scanRouter.post('/', scanController.scanQRCode);

module.exports = scanRouter;
