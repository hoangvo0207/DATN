export default function formatDataExamle(data) {
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