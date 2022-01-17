import express from 'express';
import { deleteRecommend, getRecommend, getRecommends } from '../controllers/recommend.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//GET ALL
router.get('/', verifyToken, getRecommends);

//DELETE
router.delete('/:id', verifyToken, deleteRecommend);

//GET
router.get('/find/:id', verifyToken, getRecommend);

export default router;