import express from 'express';
import { createMovie, deleteMovie, getFeaturedMovie, getMovie, getMovies, updateMovie } from '../controllers/movie.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createMovie);

//UPDATE
router.put('/:id', verifyToken, updateMovie);

//DELETE
router.delete('/:id', verifyToken, deleteMovie);

//GET
router.get('/find/:id', verifyToken, getMovie);

//GET RANDOM FEATURED
router.get('/random', verifyToken, getFeaturedMovie);

//GET ALL
router.get('/', verifyToken, getMovies);

export default router;