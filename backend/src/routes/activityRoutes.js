import express from 'express';
import { logActivity, getUserActivities } from '../controllers/activityController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, logActivity)
  .get(protect, getUserActivities);

export default router;
