const router = require('express').Router();
const controller = require('../controllers/reviews');

router.get('/', controller.get);

module.exports = router;
