const axios = require('axios');

const { ATELIER_API, API_TOKEN } = process.env;

module.exports = {
  get(req, res) {
    axios.get(`${ATELIER_API}/products`, {
      headers: {
        authorization: API_TOKEN,
      },
    })
      .then(({ data }) => res.json(data));
  },
};
