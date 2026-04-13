import express from 'express';
import { createMatchRequest, getUserMatches, updateMatchStatus } from '../controllers/matchController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createMatchRequest)
  .get(protect, getUserMatches);

router.route('/:id')
  .put(protect, updateMatchStatus);

export default router;
