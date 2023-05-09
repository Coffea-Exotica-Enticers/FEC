const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/', controller.get);
router.get('/:product_id', controller.getSpecificProduct);
router.get('/:product_id/styles', controller.getProductStyles);

module.exports = router;
