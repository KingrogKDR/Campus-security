const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aadhar_number: {
    type: Number,
    min: 12,
    max: 12,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  dob: {
    type: Date,
    required: true,
  },
  emailid:
  {
    type: String,
    lowercase: true,
    required: true,
  },
  phoneno:
  {
    type: Number,
    required: true,
  },
  admin:
  {
    type: Number,
    default: 0,
  }

});
const User = mongoose.model('User', userSchema);

module.exports = User;
