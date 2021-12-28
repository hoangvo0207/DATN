import { Recommend } from '../models/Recommend.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const data = require('../../data/data.json');

const formatData = data => {
    let formatted = [];

    for (const [key, labels] of Object.entries(data)) {
        let tmpObj = {};
        const title = labels.map(l => {
            return l.title.toLowerCase();
        });

        tmpObj = {
            id: key,
            content: title.join(" ")
        };

        formatted.push(tmpObj);
    }

    return formatted;
};

const createVectorsFromDocs = processedDocs => {
    const tfidf = new TfIdf();

    processedDocs.forEach(processedDocument => {
        tfidf.addDocument(processedDocument.content);
    });

    const documentVectors = [];

    for (let i = 0; i < processedDocs.length; i += 1) {
        const processedDocument = processedDocs[i];
        const obj = {};

        const items = tfidf.listTerms(i);

        for (let j = 0; j < items.length; j += 1) {
            const item = items[j];
            obj[item.term] = item.tfidf;
        }

        const documentVector = {
            id: processedDocument.id, //id of root array movies
            vector: new Vector(obj)
            // {
            //    flowers (key): 1.2345 (value), ...
            // }
        };

        documentVectors.push(documentVector);
    }
}

/**
* Calculates the similarities between 2 vectors
* getCosineSimilarity creates the dotproduct and the 
* length of the 2 vectors to calculate the cosine 
* similarity
*/
const calcSimilarities = docVectors => {
    // number of results that you want to return.
    const MAX_SIMILAR = 20;
    // min cosine similarity score that should be returned.
    const MIN_SCORE = 0.2;
    const data = {};

    for (let i = 0; i < docVectors.length; i += 1) {
        const documentVector = docVectors[i];
        const { id } = documentVector;

        data[id] = [];
    }

    for (let i = 0; i < docVectors.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            const idi = docVectors[i].id;
            const vi = docVectors[i].vector;
            const idj = docVectors[j].id;
            const vj = docVectors[j].vector;
            const similarity = vi.getCosineSimilarity(vj);

            if (similarity > MIN_SCORE) {
                data[idi].push({ id: idj, score: similarity });
                data[idj].push({ id: idi, score: similarity });
            }
        }
    }

    // finally sort the similar documents by descending order
    Object.keys(data).forEach(id => {
        data[id].sort((a, b) => b.score - a.score);

        if (data[id].length > MAX_SIMILAR) {
            data[id] = data[id].slice(0, MAX_SIMILAR);
        }
    });

    return data;
}

const getLength = () => {
    let l = 0;

    this.getComponents().forEach(k => {
        l += this.vector[k] * this.vector[k];
    });

    return Math.sqrt(l);
}

const getCosineSimilarity = (vector) => {
    return this.getDotProduct(vector) / (this.getLength() * vector.getLength());
}

const getSimilarDocuments = (id, trainedData) => {
    let similarDocuments = trainedData[id];

    if (similarDocuments === undefined) {
        return [];
    }

    return similarDocuments;
};

export const getRecommends = async (req, res) => {
    // if (req.user.isAdmin) {
    //     try {
    //         const movies = await Movie.find();
    //         res.status(200).json(movies.reverse());
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // } else {
    //     res.status(403).json("You are not allowed!");
    // }
};