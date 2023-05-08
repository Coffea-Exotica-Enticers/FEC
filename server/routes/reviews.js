const router = require('express').Router();
const controller = require('../controllers/reviews');

router.get('/meta', controller.getMeta);
router.get('/', controller.get);

module.exports = router;
