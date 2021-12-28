import similarity from './similarity.js';

export default function getCosineSimilarity(docVectors) {
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
                data[idi].push({ id: idj, title: docVectors[j].title, image: docVectors[j].image, score: similarityResult });
                data[idj].push({ id: idi, title: docVectors[i].title, image: docVectors[j].image, score: similarityResult });
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