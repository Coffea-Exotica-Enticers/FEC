const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  get(req, res) {
    axios.get(`${ATELIER_API}/reviews`, {
      params: {
        product_id: req.query.product_id,
      },
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data.results))
      .catch((err) => {
        console.log('ERROR GETTING REVIEWS', err);
        res.status(404).json(err);
      });
  },
  getMeta(req, res) {
    axios.get(`${ATELIER_API}/reviews/meta`, {
      params: {
        product_id: req.query.product_id,
      },
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data.characteristics))
      .catch((err) => {
        console.log('ERROR GETTING META DATA', err);
        res.status(404).json(err);
      });
  },
  post(req, res) {},
  putHelpful(req, res) {},
  putReport(req, res) {},
};
