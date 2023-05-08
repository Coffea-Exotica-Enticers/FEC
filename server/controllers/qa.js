const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  getQuestions(req, res) {
    console.log('count: ', req.query.count, 'page: ', req.query.page);

    axios.get(`${ATELIER_API}/qa/questions`, {
      params: {
        // product_id: req.query.id,
        product_id: 40320,
        page: req.query.page,
        count: req.query.count,
      },
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then((results) => {
        res.status(200).send(results.data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  getAnswers(req, res) {
    axios.get(`${ATELIER_API}/qa/questions/${req.query.id}/answers`, {
      params: {
        page: 1,
        count: 2,
      },
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then((results) => {
        res.status(200).send(results.data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  // postQuestion(req, res) {},
};
