const express = require('express');
const path = require('path');
const axios = require('axios');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/products/:id', (req, res) => {
  // res.redirect(`http://localhost:3002${req.url}`)
  axios.get(`http://ec2-34-213-37-84.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/questions/sort/:sort', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`)
  axios.get(`http://ec2-54-186-31-137.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/questions/:question_id', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`)
  axios.get(`http://ec2-54-186-31-137.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/:id/relatedItems', (req, res) => {
  // res.redirect(`http://localhost:3004${req.url}`)
  axios.get(`http://ec2-52-24-22-173.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/reviews/avg/:item', (req, res) => {
  // res.redirect(`http://localhost:3005${req.url}`)
  axios.get(`http://ec2-52-33-159-141.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  // res.redirect(`http://localhost:3005${req.url}`)
  axios.get(`http://ec2-52-33-159-141.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => res.send(err))
});



app.listen(PORT, () => {
  console.log(`server is listening at: ${PORT}`);
});