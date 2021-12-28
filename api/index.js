import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import movieRoute from './routes/movies.js';
import listRoute from './routes/lists.js';
import recommendRoute from './routes/recommends.js';
import cors from 'cors';
import { createRequire } from 'module';
import similarity from './similarity/similarity.js';

const require = createRequire(import.meta.url);
const natural = require('natural');
const fs = require('fs');
const data = require('../data/data.json');
const dataExample = require('../data/dataExample.json');

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

const formatDataExample = data => {
    let formatted = [];
    let tmpObj = {};
    let formattedLast = [];
    let tmpObjLast = {};

    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;

        tmpObj = {
            id: i,
            content: title.toLowerCase()
        };

        formatted.push(tmpObj);
    };

    let contentLast = '';

    for (let i = 0; i < formatted.length; i++) {
        contentLast = contentLast + formatted[i].content + ' ';
    }

    tmpObjLast = {
        id: 0,
        content: contentLast.toLowerCase()
    };

    formattedLast.push(tmpObjLast);

    return formattedLast;
}

const formatData = data => {
    let formatted = [];
    let tmpObj = {};

    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;

        tmpObj = {
            id: i,
            content: title.toLowerCase()
        };

        formatted.push(tmpObj);
    };

    return formatted;
}

const createVectorsFromDocs = processedDocs => {
    const tfidf = new natural.TfIdf();

    processedDocs.forEach(processedDocument => {
        tfidf.addDocument(processedDocument.content);
    });

    const documentVectors = [];

    for (let i = 0; i < processedDocs.length; i++) {
        const processedDocument = processedDocs[i];
        const obj = {};

        const items = tfidf.listTerms(i);

        for (let j = 0; j < items.length; j += 1) {
            const item = items[j];
            obj[item.term] = item.tfidf;
        }

        const documentVector = {
            id: processedDocument.id,
            vector: obj
        };

        documentVectors.push(documentVector);
    }

    return documentVectors;
}

const createVectorsFromData = processedData => {
    const tfidf = new natural.TfIdf();

    processedData.forEach(processedDocument => {
        tfidf.addDocument(processedDocument.content);
    });

    const documentVectors = [];

    for (let i = 0; i < processedData.length; i++) {
        const processedDocument = processedData[i];
        const obj = {};

        const items = tfidf.listTerms(i);

        for (let j = 0; j < items.length; j += 1) {
            const item = items[j];
            obj[item.term] = item.tfidf;
        }

        const documentVector = {
            id: processedDocument.id,
            vector: obj
        };

        documentVectors.push(documentVector);
    }

    return documentVectors;
}

const getCosineSimilarity = (docVectors) => {
    const MAX_SIMILAR = 20;

    const MIN_SCORE = 0.2;

    const data = {};

    for (let i = 0; i < docVectors.length; i += 1) {
        const dataVector = docVectors[i];
        const { id } = dataVector;

        data[id] = [];
    }

    for (let i = 0; i < docVectors.length; i += 1) {
        for (let j = 0; j < docVectors.length; j += 1) {
            const idi = docVectors[i].id;
            const vi = docVectors[i].vector;
            const idj = docVectors[j].id;
            const vj = docVectors[j].vector;
            const similarityResult = similarity(vi, vj);

            if (similarityResult > MIN_SCORE) {
                data[idi].push({ id: idj, title: '', score: similarityResult });
                data[idj].push({ id: idi, title: '', score: similarityResult });
            }
        }
    }

    // Sort Decrescent
    Object.keys(data).forEach(id => {
        data[id].sort((a, b) => b.score - a.score);

        if (data[id].length > MAX_SIMILAR) {
            data[id] = data[id].slice(0, MAX_SIMILAR);
        }
    });

    return data;
}

app.listen(8000, () => {
    console.log('Backend server is running');
    const testExample = formatDataExample(dataExample);
    const vectorExample = createVectorsFromDocs(testExample);

    const check = formatData(data);
    //fs.writeFileSync('tf-idf.txt', JSON.stringify(check));
    //console.log(check);
    const dataVector = createVectorsFromData(check);
    //fs.writeFileSync('vectors.txt', JSON.stringify(dataVector));
    const result = getCosineSimilarity(dataVector);
    // console.log(result);
    // fs.writeFileSync('result.txt', JSON.stringify(result));
    // const testData = formatDataExample(data);
    // const vectorData = createVectorsFromDocs(testData);
    // console.log(vectorExample);
    // console.log(vectorData);
});