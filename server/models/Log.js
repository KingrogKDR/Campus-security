const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  checkin_location: String,
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
