const express = require('express');
const connection = require('./conf');

const app = express();
const port = 3000;

// respond to requests on `/api/movies/:id`
app.get('/api/movies/:id', (req, res) => {
  const movieID = req.params.id
  // send an SQL query to get all movies
  connection.query('SELECT * FROM movie WHERE id = ?', [movieID], (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      if (results[0]) {
        res.json(results);
      }
      else {
        res.status(404).send('Movie not found')
      }
    }
  });
});

// respond to requests on `/api/movies`
app.get('/api/movies', (req, res) => {
  // Stocker la requête SQL dans une variable (en let car on est susceptible de la modifier)
  let sql = 'SELECT * FROM movie';
  // Déclarer un tableau vide, qui éventuellement contiendra des valeurs à passer à cette requête
  const sqlValues = [];

  if (req.query.rating) {
    sql += sqlValues.length > 0 ? ' AND' : ' WHERE'
    sql += ' rating = ?';
    sqlValues.push(req.query.rating);
  }
  if (req.query.genre) {
    sql += sqlValues.length > 0 ? ' AND' : ' WHERE'
    sql += ' genre = ?'
    sqlValues.push(req.query.genre);
  }
  // send an SQL query to get all movies
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});