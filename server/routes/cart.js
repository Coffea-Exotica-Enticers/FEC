const router = require('express').Router();
const controller = require('../controllers/cart');

router.post('/', controller.addToCart);
router.get('/', controller.getCart);

module.exports = router;
