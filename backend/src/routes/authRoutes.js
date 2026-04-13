import express from 'express';
import { registerLocal, loginLocal, oauthCallbackHandler } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerLocal);
router.post('/login', loginLocal);

// Future scope endpoints mapped out
router.get('/oauth/callback', oauthCallbackHandler);

export default router;
