const fs = require('fs');
const daoList = require('./newDaoList.json');
const extraDaoInfo = require('./extraDaoInfo.json');
const newDaoList = daoList;
const newList = [];

daoList.forEach((item, i) => {
  const daoName = item.name;
  const currentDaoObj = item;

  extraDaoInfo.forEach((info, j) => {
    const infoName = info.full_name;
    if (infoName.includes(daoName)) {
      const obj = {};
      //copy properties over from extraDaoInfo to newDaoList
      for (let key in info) {
        if (key !== 'full_name') {
          newDaoList[i][key] = info[key];
        }
      }
    }
  });
});

// console.log(newDaoList);
fs.writeFileSync('./finalDaoList.json', JSON.stringify(newDaoList));
