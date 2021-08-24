let csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const dao_list = require('./DAOlist');

let fileInputName = 'tableDownload.csv';

const json = csvToJson.fieldDelimiter('"').getJsonFromCsv(fileInputName);

json.forEach((item) => {
  for (let key in item) {
    if (key.length < 2) {
      delete item[key];
    }
  }
});

fs.writeFileSync('./DAOlist_1.json', JSON.stringify(dao_list, null, 4));
