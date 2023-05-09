const router = require('express').Router();
const controller = require('../controllers/products');

 productDetail-skeleton
router.get('/:product_id', controller.getSpecificProduct);
router.get('/:product_id/related', controller.getRelated);
main
router.get('/:product_id/styles', controller.getStyles);
router.get('/', controller.get);

module.exports = router;
