require('../index');
const mongoose = require('mongoose');
require('./DAO');

const socialMediaSchema = new mongoose.Schema({
  dao_id: { type: mongoose.Schema.Types.ObjectId, ref: 'DAO' },
  dao_name: String,
  twitter_link: String,
  discord_link: String,
  website: String,
  twitter_followers: mongoose.Mixed,
});

const socialMediaModel = mongoose.model('Social Media', socialMediaSchema);

module.exports = socialMediaModel;
