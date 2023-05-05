const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/', controller.get);

module.exports = router;
