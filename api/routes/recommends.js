import express from 'express';
import { getRecommends } from '../controllers/recommend.js';

const router = express.Router();

//GET ALL
router.get('/', getRecommends);

export default router;