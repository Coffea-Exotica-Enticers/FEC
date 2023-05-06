const router = require('express').Router();
const { getQuestions, getAnswers } = require('../controllers/qa');

router.get('/answers', getAnswers);
router.get('/questions', getQuestions);

module.exports = router;
