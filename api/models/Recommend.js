import mongoose from 'mongoose';

const RecommendSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
},
    { timestamps: true }
);

export const Recommend = mongoose.model('recommends', RecommendSchema);