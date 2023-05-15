const router = require('express').Router();
const controller = require('../controllers/cart');

router.post('/cart:sku_id', controller.addToCart);
router.get('/cart', controller.getCart);

module.exports = router;
