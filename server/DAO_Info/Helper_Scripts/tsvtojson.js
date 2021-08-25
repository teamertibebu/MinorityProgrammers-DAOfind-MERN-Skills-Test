const tsv = require('node-tsv-json');
const fs = require('fs');
tsv(
  {
    input: 'Open Source DAO Market Research  - Market research.tsv',
    output: 'output.json',
    //array of arrays, 1st array is column names
    parseRows: true,
  },
  function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(result));
      fs.writeFile('./');
    }
  }
);
