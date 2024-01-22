//Route handling the authentication pages

import express from 'express';
import { login, register } from '../controllers/authcontroller';

const router = express.Router();

router.post('/login', login); //Login Route
router.post('/register', register); //Registration Route

export default router;