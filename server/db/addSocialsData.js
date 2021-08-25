const Socials = require('./Models/Socials');
const daoData = require('../DAO_Info/JSON_Outputs/finalDaoList.json');

daoData.forEach((daoObj) => {
  const {
    twl: twitter_followers,
    twitter_link,
    discord_link,
    website,
    name: dao_name,
  } = daoObj;

  const newSocial = {
    dao_name,
    twitter_link: twitter_link || 'N/A',
    discord_link: discord_link || 'N/A',
    website: website || 'N/A',
    twitter_followers: Number(twitter_followers) || 'N/A',
  };

  Socials.create(newSocial, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});
