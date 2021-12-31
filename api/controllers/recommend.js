import { Recommend } from '../models/Recommend.js';

export const getRecommends = async (req, res) => {
    try {
        const recommends = await Recommend.find();
        res.status(200).json(recommends);
    } catch (error) {
        res.status(500).json(error);
    }
};