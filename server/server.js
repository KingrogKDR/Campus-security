
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_user_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User model

// Define Log model

// Express middleware to parse JSON
app.use(express.json());

// Endpoint for checking in
app.use('/checkin', routes.checkinRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
