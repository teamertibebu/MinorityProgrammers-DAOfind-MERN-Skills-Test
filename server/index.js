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
  const query = ((filters) => {
    const queries = {};
    for (let key in filters) {
      if (filters[key] && filters[key] !== 'All') {
        queries[key] = filters[key];
      }
    }
    return queries;
  })(req.query);

  Dao.find(query, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, (err) => {
  console.log(err ? err : `http://localhost:${PORT}`);
});
