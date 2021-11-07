import express from 'express';
import { createList, deleteList } from '../controllers/list.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createList);

//DELETE
router.delete('/:id', verifyToken, deleteList);

export default router;