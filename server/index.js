require('dotenv').config();
const path = require('path');
const axios = require('axios');

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/products', (req, res) => {
  axios.get(`${process.env.ATELIER_API}/products`, {
    headers: {
      authorization: process.env.API_TOKEN,
    },
  })
    .then((results) => {
      res.json(results.data);
    });
});

app.get('/questions', (req, res) => {
  console.log('req is', req.query.id);

  axios.get(`${process.env.ATELIER_API}/qa/questions`, {
    params: {
      product_id: req.query.id,
    },
    headers: {
      authorization: process.env.API_TOKEN,
    },
  })
    .then((results) => {
      res.status(200).send(results.data);
      console.log('success');
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log('failure');
    });
});

// app.get('/answers', (req, res) => {

// });

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
