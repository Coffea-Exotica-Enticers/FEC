const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  getQuestions(req, res) {
    console.log('count: ', req.query.count, 'page: ', req.query.page);

    axios.get(`${ATELIER_API}/qa/questions`, {
      params: {
        product_id: req.query.id,
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

  postQuestion(req, res) {
    console.log('req is', req.body);
    axios.post(`${ATELIER_API}/qa/questions`, {
        body: req.body.question,
        name: req.body.user_name,
        email: req.body.email,
        product_id: req.body.id,
      },
      {
        headers: {
          authorization: API_TOKEN,
        },
      },
    )
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
  },

  postAnswer(req, res) {
    axios.post(`${ATELIER_API}/qa/questions/${req.body.id}/answers`, {
        body: req.body.answer,
        name: req.body.user_name,
        email: req.body.email,
      },
      {
        headers: {
          authorization: API_TOKEN,
        },
      },
    )
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  }
};
