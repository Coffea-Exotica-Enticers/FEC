const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  getQuestions(req, res) {
    axios.get(`${ATELIER_API}/qa/questions`, {
      params: {
        // product_id: req.query.id,
        product_id: 40320,
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

  postQuestion(req, res) {},
};
