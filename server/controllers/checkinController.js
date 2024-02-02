const User = require('../models/User');
const Log = require('../models/Log');

const checkin = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (user) {
      const newLog = new Log({
        user_id: user._id,
        checkin_location: req.params.location,
      });
      await newLog.save();
      res.send('Check-in successful');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  checkin,
};
