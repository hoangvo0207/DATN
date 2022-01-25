import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    userFeedback: {
        type: Object
    },
    movie: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    }
},
    { timestamps: true }
);

export const Feedback = mongoose.model('feedbacks', FeedbackSchema);