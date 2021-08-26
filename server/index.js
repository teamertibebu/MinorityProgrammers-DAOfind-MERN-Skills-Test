const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const Dao = require('./db/Models/DAO');
const Socials = require('./db/Models/Socials');
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

app.get('/dao/:id', (req, res) => {
  const id = req.params.id;
  Dao.find({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

///Below was used to reference the Dao & Socials schemas/////////
/*app.get('/update', async (req, res) => {
  const daos = await Dao.find({});
  const socials = await Socials.find({});
  daos.forEach((dao) => {
    socials.forEach((social) => {
      if (dao.full_name === social.dao_name) {
        dao.socials = social._id;
        social.dao_id = dao._id;

        dao
          .save()
          .then(() => console.log('saved Dao'))
          .catch((error) => console.log('Error Dao: ', error));
        social
          .save()
          .then(() => console.log('saved Social'))
          .catch((error) => console.log('Error Social: ', error));
      }
    });
  });
  res.json(socials);
});
*/

app.listen(PORT, (err) => {
  console.log(err ? err : `http://localhost:${PORT}`);
});
