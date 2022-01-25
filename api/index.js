import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import movieRoute from './routes/movies.js';
import listRoute from './routes/lists.js';
import recommendRoute from './routes/recommends.js';
import feedbackRoute from './routes/feedbacks.js';
import cors from 'cors';
// import { createRequire } from 'module';
// import formatData from './training/formatData.js';
// import createVectorsFromDocs from './training/createVectorsFromDocs.js';
// import getCosineSimilarity from './training/getCosineSimilarity.js';
// import getSimilarDocuments from './training/getSimilarDocuments.js';
// const require = createRequire(import.meta.url);
// const fs = require('fs');
// const data = require('../data/data.json');
// const result = require('./training/records/result.json');
// const similarityResult = require('./training/records/similarity-result.json');

const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('DB Connect Successfully!'))
    .catch((err) => console.log(err));

// var uniqueSimilarityResult = [...new Set(similarityResult)];
// var connection = mongoose.connection;
// connection.collection('recommends').insertMany(uniqueSimilarityResult, {ordered : false });

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);
app.use('/api/recommends', recommendRoute);
app.use('/api/feedbacks', feedbackRoute);

app.listen(8000, () => {
    console.log('Backend server is running');

    // const formattedData = formatData(data);
    // const dataVectors = createVectorsFromDocs(formattedData);
    // const result = getCosineSimilarity(dataVectors);
    // console.log(result);
    // fs.writeFileSync('result.json', JSON.stringify(result));

    // const values = Object.values(result);
    // let array = [];
    // for (let i = 0; i < values.length; i++) {
    //     const value = values[i];
    //     for (let j = 0; j < value.length; j++) {
    //         array.push(value[j]);
    //     }
    // };

    // fs.writeFileSync('similarity-result.json', JSON.stringify(array));
    // connection.collection('recommends').insertMany(uniqueSimilarityResult, {ordered : false });
});