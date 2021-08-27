const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const Dao = require('./db/Models/DAO');

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

app.get('/dao/:id', (req, res) => {
  const id = req.params.id;
  Dao.find({ _id: id })
    .populate('socials')
    .exec((err, dao) => {
      if (err) console.log(err);
      else res.json(dao);
    });
});

app.get('/filter', (req, res) => {
  const TVLranges = {
    'Under $1 Billion': { $lt: 1e9 },
    '$1 Billion - $5 Billion': { $gte: 1e9, $lt: 5e9 },
    '$5 Billion - $10 Billion': { $gte: 5e9, $lt: 10e9 },
    'Over $10 Billion': { $gt: 10e9 },
  };

  const query = ((filters) => {
    const queries = {};
    for (let key in filters) {
      if (filters[key] && filters[key] !== 'All') {
        if (key === 'TVL') {
          queries[key] = TVLranges[filters[key]];
        } else {
          queries[key] = filters[key];
        }
      }
    }
    console.log(queries, '------');
    return queries;
  })(req.query);

  Dao.find(query, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, (err) => {
  console.log(err ? err : `http://localhost:${PORT}`);
});
