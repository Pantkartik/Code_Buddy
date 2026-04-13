import Activity from '../models/Activity.js';
import User from '../models/User.js';

// @desc    Log a new activity
// @route   POST /api/activities
// @access  Private
export const logActivity = async (req, res) => {
  try {
    const { date, status } = req.body;
    
    const activity = await Activity.create({
      userId: req.user._id,
      date: date || new Date(),
      status: status || 'completed'
    });

    // Update user streak if completed
    if (activity.status === 'completed') {
      await User.findByIdAndUpdate(req.user._id, { $inc: { streak: 1 } });
    } else {
      // Reset streak if missed
      await User.findByIdAndUpdate(req.user._id, { streak: 0 });
    }

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user activities
// @route   GET /api/activities
// @access  Private
export const getUserActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
