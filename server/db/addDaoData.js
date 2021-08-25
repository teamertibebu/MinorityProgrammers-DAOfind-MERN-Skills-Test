const DAO = require('./Models/DAO');
const daoData = require('../DAO_Info/JSON_Outputs/finalDaoList.json');

daoData.forEach((daoObj) => {
  const {
    name: full_name,
    description,
    foundDate: date_founded,
    img: logo_link,
    category,
    totalValueUSD: TVL,
    website,
    aum,
    totalInUSD,
    totalOutUSD,
    totalNumMembers: members,
    totalNumProposals: proposals,
    totalNumVoters: voters,
    votersParticipation: voters_participation,
  } = daoObj;

  const newDao = {
    full_name,
    description,
    date_founded: new Date(date_founded),
    logo_link,
    category,
    TVL: Number(TVL) || 'N/A',
    website,
    aum: Number(aum) || 'N/A',
    totalInUSD: Number(totalInUSD) || 'N/A',
    totalOutUSD: Number(totalOutUSD) || 'N/A',
    members: Number(members) || 'N/A',
    voters: Number(voters) || 'N/A',
    proposals: Number(proposals) || 'N/A',
    voters_participation: Number(voters_participation) || 'N/A',
  };

  DAO.create(newDao, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});
