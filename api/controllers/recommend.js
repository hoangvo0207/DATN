import { Recommend } from '../models/Recommend.js';

export const getRecommends = async (req, res) => {
    try {
        const recommends = await Recommend.find();
        res.status(200).json(recommends);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteRecommend = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Recommend.findByIdAndDelete(req.params.id);
            res.status(200).json('Recommend Movie deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed');
    }
};

export const getRecommend = async (req, res) => {
    try {
        const recommend = await Recommend.findById(req.params.id);
        res.status(200).json(recommend);
    } catch (error) {
        res.status(500).json(error);
    }
};