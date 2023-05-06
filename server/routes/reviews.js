const router = require('express').Router();
const controller = require('../controllers/reviews');

router.put('/:review_id/helpful', controller.putHelpful);
router.get('/', controller.get);

module.exports = router;
