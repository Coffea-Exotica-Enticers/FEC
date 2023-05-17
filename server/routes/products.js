const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/:product_id', controller.get);
router.get('/:product_id/related', controller.getRelated);
router.get('/:product_id/styles', controller.getStyles);
router.get('/', controller.get);

module.exports = router;
