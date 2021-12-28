import natural from 'natural';

export default function createVectorsFromDocs(processedDocs) {
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
            title: processedDocument.content,
            image: processedDocument.image,
            vector: obj
        };

        documentVectors.push(documentVector);
    }

    return documentVectors;
}