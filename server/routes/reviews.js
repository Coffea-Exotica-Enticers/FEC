const router = require('express').Router();
const controller = require('../controllers/reviews');

router.put('/:review_id/helpful', controller.putHelpful);
router.put('/:review_id/report', controller.putReport);
<<<<<<< HEAD
router.get('/meta', controller.getMetaData);
=======
router.get('/meta', controller.getMeta);
>>>>>>> main
router.get('/', controller.get);

module.exports = router;
