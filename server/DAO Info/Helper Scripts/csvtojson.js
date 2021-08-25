let csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const list = require('./Open Source DAO Market Research  - Market research.csv');
let fileInputName = 'Open Source DAO Market Research  - Market research.csv';
let fileOutputName = 'myOutputFile.json';
csvToJson
  .fieldDelimiter(',')
  .generateJsonFileFromCsv(fileInputName, fileOutputName);

// const json = csvToJson.getJsonFromCsv(fileInputName);
// console.log(json);
// json.forEach((item) => {
//   for (let key in item) {
//     if (key.length < 2) {
//       delete item[key];
//     }
//   }
// });

// fs.writeFileSync('./extraDaoInfo.json', JSON.stringify(dao_list, null, 4));
