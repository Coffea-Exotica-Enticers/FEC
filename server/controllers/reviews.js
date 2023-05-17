const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  get(req, res) {
    axios.get(`${ATELIER_API}/reviews`, {
      params: {
        page: req.query.page,
        count: req.query.count,
        sort: req.query.sort,
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
    const productId = req.query.product_id;
    axios.get(`${ATELIER_API}/reviews/meta`, {
      params: {
        product_id: productId,
      },
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data))
      .catch((err) => {
        console.log('ERROR GETTING META DATA', err);
        res.status(404).json(err);
      });
  },
  post(req, res) {
    axios.post(`${ATELIER_API}/reviews`, req.body, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('ERROR POSTING REVIEW', err);
        res.sendStatus(400);
      });
  },
  putHelpful(req, res) {
    axios.put(`${ATELIER_API}/reviews/${req.params.review_id}/helpful`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log('ERROR UPDATING HELPFUL', err);
        res.sendStatus(400);
      });
  },
  putReport(req, res) {
    axios.put(`${ATELIER_API}/reviews/${req.params.review_id}/report`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error('ERROR REPORTING REVIEW', err);
        res.sendStatus(400);
      });
  },
};
