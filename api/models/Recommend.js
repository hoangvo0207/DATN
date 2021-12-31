import mongoose from 'mongoose';

const RecommendSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    score: {
        type: Number
    }
},
    { timestamps: true }
);

export const Recommend = mongoose.model('recommends', RecommendSchema);