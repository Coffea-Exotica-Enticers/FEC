const router = require('express').Router();
const { getQuestions, getAnswers } = require('../controllers/qa');

router.get('/questions', getQuestions);
router.get('/answers', getAnswers);

module.exports = router;
