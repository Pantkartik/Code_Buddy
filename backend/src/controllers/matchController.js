import Match from '../models/Match.js';
import User from '../models/User.js';

// @desc    Create a match request
// @route   POST /api/matches
// @access  Private
export const createMatchRequest = async (req, res) => {
  try {
    const { targetUserId } = req.body;
    
    if (req.user._id.toString() === targetUserId) {
      return res.status(400).json({ message: 'Cannot match with yourself' });
    }

    const matchExists = await Match.findOne({
      users: { $all: [req.user._id, targetUserId] },
    });

    if (matchExists) {
      return res.status(400).json({ message: 'Match request already exists' });
    }

    const match = await Match.create({
      users: [req.user._id, targetUserId],
      requester: req.user._id,
      status: 'pending',
    });

    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user matches
// @route   GET /api/matches
// @access  Private
export const getUserMatches = async (req, res) => {
  try {
    const matches = await Match.find({ users: req.user._id })
      .populate('users', 'name email skills level')
      .populate('requester', 'name');
    
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update match status (accept/reject)
// @route   PUT /api/matches/:id
// @access  Private
export const updateMatchStatus = async (req, res) => {
  try {
    const { status } = req.body; // 'accepted' or 'rejected'
    const match = await Match.findById(req.params.id);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    // Only the non-requester can accept/reject
    if (match.requester.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: 'Requester cannot update match status' });
    }

    // Verify user is part of the match
    if (!match.users.includes(req.user._id)) {
      return res.status(403).json({ message: 'Not authorized to update this match' });
    }

    match.status = status;
    const updatedMatch = await match.save();

    res.json(updatedMatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
