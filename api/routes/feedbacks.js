import express from 'express';
import { createFeedback, getFeedbacks, getFeedback, updateFeedback, deleteFeedback } from '../controllers/feedback.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createFeedback);

//GET
router.get('/', verifyToken, getFeedbacks);

//GET
router.get('/find/:id', verifyToken, getFeedback);

//UPDATE
router.put('/:id', verifyToken, updateFeedback);

//DELETE
router.delete('/:id', verifyToken, deleteFeedback);

export default router;