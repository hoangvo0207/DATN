import express from 'express';
import { deleteUser, getUser, getUsers, getUserStats, updateUser } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyToken, updateUser);

//DELETE
router.delete('/:id', verifyToken, deleteUser);

//GET
router.get('/find/:id', getUser);

//GET ALL
router.get('/', verifyToken, getUsers);

//GET USER STATS
router.get('/stats', getUserStats);

export default router;