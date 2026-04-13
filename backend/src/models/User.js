import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // For MVP simple JWT
  skills: [{ type: String }],
  level: { type: String }, // e.g., Beginner, Intermediate, Expert
  goals: [{ type: String }],
  availability: { type: String },
  bio: { type: String },
  streak: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
