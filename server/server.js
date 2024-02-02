const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/checkinRoute.js');
const userrouter = require('./routes/authorization.js');
const scanRoutes = require('./routes/scanRoutes.js');
const cookieParser=require("cookie-parser")

const app = express();  // Initialize Express app

const PORT = 5001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UniSafedb',);

app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

// Endpoints
app.use('/checkin', router);  
app.use('/', userrouter);
app.use('/scan', scanRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
