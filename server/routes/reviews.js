const router = require('express').Router();
const controller = require('../controllers/reviews');

router.put('/:review_id/helpful', controller.putHelpful);
router.put('/:review_id/report', controller.putReport);
router.get('/meta', controller.getMeta);
router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
