export default function formatData(data) {
    let formatted = [];
    let tmpObj = {};

    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;
        const image = data[i].image;

        tmpObj = {
            id: i,
            content: title.toLowerCase(),
            image: image
        };

        formatted.push(tmpObj);
    };

    return formatted;
}