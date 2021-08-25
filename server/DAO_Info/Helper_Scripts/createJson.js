const list = require('./output.json');
const fs = require('fs');

const newList = [];

list.forEach((listItem, i) => {
  //all objects should have 4 properties as described above, some may be empty.
  //variables for each entry.
  const [full_name, twitter_link, discord_link, website, description] =
    listItem;
  const daoObj = {
    full_name,
    twitter_link,
    discord_link,
    website,
    description,
  };
  newList.push(daoObj);
});

const json = JSON.stringify(newList);
fs.writeFileSync('./extraDaoInfo.json', json, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully created extraDaoInfo.json');
  }
});
