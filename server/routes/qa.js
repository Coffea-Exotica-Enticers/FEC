const router = require('express').Router();
const { getQuestions } = require('../controllers/qa');

router.get('/questions', getQuestions);

module.exports = router;
