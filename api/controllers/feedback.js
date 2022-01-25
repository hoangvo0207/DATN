import { Feedback } from '../models/Feedback.js';

export const createFeedback = async (req, res) => {
    const newFeedback = new Feedback(req.body);
    try {
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks.reverse());
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateFeedback = async (req, res) => {
    try {
        const { movie, comment, rating } = req.body;

        let updatedFeedback = {
            movie,
            comment: comment || '',
            rating: rating || 0
        }

        const feedbackUpdateCondition = { _id: req.params.id };
        updatedFeedback = await Feedback.findOneAndUpdate(feedbackUpdateCondition, updatedFeedback, { new: true });
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteFeedback = async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json('Feedback deleted');
    } catch (error) {
        res.status(500).json(error);
    }
};