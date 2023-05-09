/* eslint-disable prefer-destructuring */
const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  get(req, res) {
    axios.get(`${ATELIER_API}/products`, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data))
      .catch((err) => {
        console.log('There was a problem in the server retrieving product data: ', err);
        res.sendStatus(404);
      });
  },

  getSpecificProduct(req, res) {
    axios.get(`${ATELIER_API}/products/${req.params.product_id}`, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data))
      .catch((err) => {
        console.log('There was a problem in the server retrieving specific product data: ', err);
        res.sendStatus(404);
      });
  },

  getProductStyles(req, res) {
    axios.get(`${ATELIER_API}/products/${req.params.product_id}/styles`, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data))
      .catch((err) => {
        console.log('There was a problem in the server retrieving product styles: ', err);
        res.sendStatus(404);
      });
  },
};
