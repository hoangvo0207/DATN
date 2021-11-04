import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';

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

app.use('/api/auth', authRoute);

app.listen(8000, () => {
    console.log('Backend server is running');
});