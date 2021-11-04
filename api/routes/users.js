import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyToken, updateUser);

//DELETE
router.delete('/:id', verifyToken, deleteUser);

//GET
router.get('/:id', getUser);

//GET ALL
router.get('/', verifyToken, getUsers);
//GET USER STATS

export default router;