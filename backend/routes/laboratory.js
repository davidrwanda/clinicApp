const express = require('express');

const router = express.Router();

const laboController = require('../controllers/laboratory');

router.get('/', laboController.getlaboIndex);

router.get('/exams', laboController.getExams);
router.post('/exam', laboController.postAddExam);
router.put('/exam/:examId', laboController.putEditExam);
router.delete('/exam/:examId', laboController.deleteExam);

module.exports = router;