const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/checkinRoute.js');
const userrouter = require("./routes/authorization.js")
const app = express();
const PORT = 5001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UniSafedb',);

app.use(express.json());

// Endpoints
app.use('/checkin', router);  // Use router.checkinRoute directly
app.use('/',userrouter);
app.use('/scan', scanRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
