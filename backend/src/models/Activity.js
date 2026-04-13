import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['completed', 'missed'], default: 'completed' },
}, {
  timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;
