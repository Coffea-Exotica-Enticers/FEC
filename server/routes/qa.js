const router = require('express').Router();
const {
  getQuestions, getAnswers, postQuestion, postAnswer, reportQuestion, reportAnswer, markQuestion, markAnswer,
} = require('../controllers/qa');

router.get('/questions', getQuestions);
router.get('/answers', getAnswers);
router.post('/questions', postQuestion);
router.post('/answers', postAnswer);
router.put('/questions/report', reportQuestion);
router.put('/answers/report', reportAnswer);
router.put('/questions/helpful', markQuestion);
router.put('/answers/helpful', markAnswer);

module.exports = router;
