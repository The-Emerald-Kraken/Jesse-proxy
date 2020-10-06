const express = require('express');
const path = require('path')

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/products/:id', (req, res) => {
  res.redirect(`http://localhost:3002${req.url}`)
});

app.get('/api/products/questions/sort/:sort', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`)
});

app.get('/api/products/questions/:question_id', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`)
});

app.get('/api/products/:id/relatedItems', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`)
});

app.get('/api/products/reviews/avg/:item', (req, res) => {
  res.redirect(`http://localhost:3005${req.url}`)
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  res.redirect(`http://localhost:3005${req.url}`)
});



app.listen(PORT, () => {
  console.log(`server is listening at: ${PORT}`);
});