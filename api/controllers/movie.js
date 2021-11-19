import { Movie } from '../models/Movie.js';

export const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const updateMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const { title, desc, img, imgTitle, imgSm, trailer, video, year, limit, isSeries, genre } = req.body;

            if (!title)
                return res.status(400).json({ success: false, message: 'Title is required!' });

            let updatedMovie = {
                title,
                desc: desc || '',
                img: img || '',
                imgTitle: imgTitle || '',
                imgSm: imgSm || '',
                trailer: trailer || '',
                video: video || '',
                year: year || '',
                limit: limit || 0,
                genre: genre || ''
            }

            const movieUpdateCondition = { _id: req.params.id };
            updatedMovie = await Movie.findOneAndUpdate(movieUpdateCondition, updatedMovie, { new: true });
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json('Movie deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getFeaturedMovie = async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === 'series') {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMovies = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
};
