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

  reportQuestion(req, res) {
    console.log(req.body.id);
    axios.put(`${ATELIER_API}/qa/questions/${req.body.id}/report`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  reportAnswer(req, res) {
    axios.put(`${ATELIER_API}/qa/answers/${req.body.id}/report`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  markQuestion(req, res) {
    axios.put(`${ATELIER_API}/qa/answers/${req.body.id}/helpful`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  markAnswer(req, res) {
    axios.put(`${ATELIER_API}/qa/answers/${req.body.id}/helpful`, {}, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  // postQuestion(req, res) {},
};
