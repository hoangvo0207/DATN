import { List } from '../models/List.js';

export const createList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const updateList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const { title, type, genre } = req.body;

            if (!title)
                return res.status(400).json({ success: false, message: 'Title is required!' });

            let updatedList = {
                title,
                type: type || '',
                genre: genre || ''
            }

            const listUpdateCondition = { _id: req.params.id };
            updatedList = await List.findOneAndUpdate(listUpdateCondition, updatedList, { new: true });
            res.status(200).json(updatedList);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json('List deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 100 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 100 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 100 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
};

