const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/checkinRoute.js');
const app = express();
const PORT = 8001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UniSafedb',);

app.use(express.json());

// Endpoint for checking in
app.use('/checkin', router);  // Use router.checkinRoute directly

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
