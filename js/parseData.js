// function that takes csv string and returns a JSON object made from the csv
// Parsed using Papa Parse library
function parseData(csvString) {
    var csvJSON;

    Papa.parse(csvString,
            {
                header: true,
                dynamicTyping: true,
                complete: function(results) {
                    csvJSON = JSON.parse(JSON.stringify(results.data));
                }
            });

    return csvJSON;
}