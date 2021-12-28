import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import movieRoute from './routes/movies.js';
import listRoute from './routes/lists.js';
import recommendRoute from './routes/recommends.js';
import cors from 'cors';
// import { createRequire } from 'module';
// import formatData from './training/formatData.js';
// import createVectorsFromDocs from './training/createVectorsFromDocs.js';
// import getCosineSimilarity from './training/getCosineSimilarity.js';

// const require = createRequire(import.meta.url);
// const fs = require('fs');
// const data = require('../data/data.json');

const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connect Successfully!'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);
app.use('/api/recommend', recommendRoute);

app.listen(8000, () => {
    console.log('Backend server is running');
    // const formattedData = formatData(data);
    // const dataVectors = createVectorsFromDocs(formattedData);
    // const result = getCosineSimilarity(dataVectors);
    // fs.writeFileSync('result.json', JSON.stringify(result));
});