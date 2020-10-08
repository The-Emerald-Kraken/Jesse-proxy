const express = require('express');
const path = require('path');
const axios = require('axios');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/products/:id', (req, res) => {
  // res.redirect(`http://localhost:3002${req.url}`)
  axios.get(`http://localhost:3002${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/questions/sort/:sort', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`)
  axios.get(`http://localhost:3001${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/questions/:question_id', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`)
  axios.get(`http://localhost:3001${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/:id/relatedItems', (req, res) => {
  // res.redirect(`http://localhost:3004${req.url}`)
  axios.get(`http://localhost:3004${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/reviews/avg/:item', (req, res) => {
  // res.redirect(`http://localhost:3005${req.url}`)
  axios.get(`http://localhost:3005${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  // res.redirect(`http://localhost:3005${req.url}`)
  axios.get(`http://localhost:3005${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});



app.listen(PORT, () => {
  console.log(`server is listening at: ${PORT}`);
});