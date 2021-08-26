const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const Dao = require('./db/Models/DAO');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'build', 'index.html')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/daoList', (req, res) => {
  Dao.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, (err) => {
  console.log(err ? err : `http://localhost:${PORT}`);
});
