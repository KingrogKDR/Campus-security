
const UserModel = require('../models/Users');
const LogModel = require('../models/Log');

const scanController = {
  scanQRCode: async (req, res) => {
    try {
      const {user_id,checkin_location} = req.body; 

      const user = await UserModel.findOne({user_id});

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      const logEntry = new LogModel({ user_id: user._id , checkin_location: checkin_location});
      await logEntry.save();

      res.status(200).json({ success: true, message: 'Scan successful', userId: user._id });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = scanController;
