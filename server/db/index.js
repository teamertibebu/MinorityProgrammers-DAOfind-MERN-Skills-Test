const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const connectionURI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@dao-cluster.qalf8.mongodb.net/dao-find?retryWrites=true&w=majority`;

mongoose
  .connect(connectionURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected successfully');
  })
  .catch((err) => {
    console.log('Connection error: ' + err);
  });

const db = mongoose.connection;
module.exports = db;
