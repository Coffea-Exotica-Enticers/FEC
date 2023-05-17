const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  addToCart(req, res) {
    console.log('Req body', req.body);
    axios.post(`${ATELIER_API}/cart`, req.body, {
      headers: {
        authorization: API_TOKEN,
      },
    }).then(({ data }) => res.status(201).json(data))
      .catch((err) => {
        console.log('There was a problem in the server when adding a product to the cart ', err);
        res.sendStatus(500);
      });
  },

  getCart(req, res) {
    axios.get(`${ATELIER_API}/cart`, {
      headers: {
        authorization: API_TOKEN,
      },
    }).then(({ data }) => res.status(200).json(data))
      .catch((err) => {
        console.log('There was a problem in the server when getting a product from the cart ', err);
        res.sendStatus(500);
      });
  },
};
