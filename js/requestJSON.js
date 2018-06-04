// input: path to a csv
// ouput: csv converted to JSON
function requestJSON(filePath) {
    var fileInJSON;

    //AJAX request csv that is server side
    var csvRequest = new Request(
        {
            url: filePath,
            // onSuccess is asyncronous, so schedule before using incidentData!
            onSuccess: function (response) {

                // send CSV to Papa Parse to convert to JSON
                fileInJSON = parseData(response);

                return fileInJSON;

            }
        }).send();
}