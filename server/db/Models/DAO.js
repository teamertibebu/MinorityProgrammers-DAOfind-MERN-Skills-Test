require('../index');
const mongoose = require('mongoose');
require('./Socials');
const {
  CATEGORY,
  BLOCKCHAIN,
  APPROVAL_STAGE,
  DAO_STRUCTURE,
} = require('../enums');

const daoSchema = new mongoose.Schema({
  full_name: String,
  description: String,
  date_founded: String,
  date_created: Date,
  logo_link: String,
  category: { type: String, enum: CATEGORY },
  governance_token_name: String,
  governance_token_symbol: String,
  governance_token_address: String,
  dao_structure: { type: String, enum: DAO_STRUCTURE },
  revenue_streams: String,
  voting_process: String,
  TVL: Number,
  tech_stack: String,
  notes: String,
  website: String,
  blockchain: { type: String, enum: BLOCKCHAIN },
  headquarters: String,
  approvalStage: { type: String, enum: APPROVAL_STAGE },
  aum: mongoose.Mixed,
  totalInUSD: mongoose.Mixed,
  totalOutUSD: mongoose.Mixed,
  members: Number,
  proposals: Number,
  voters: Number,
  voters_participation: Number,
  socials: { type: mongoose.Schema.Types.ObjectId, ref: 'Social Media' },
});

const daoModel = mongoose.model('DAO', daoSchema);

module.exports = daoModel;
