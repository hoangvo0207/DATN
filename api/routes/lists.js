import express from 'express';
import { createList, deleteList, getList, updateList } from '../controllers/list.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createList);

//UPDATE
router.put('/:id', verifyToken, updateList);

//DELETE
router.delete('/:id', verifyToken, deleteList);

//GET
router.get('/', verifyToken, getList);

export default router;