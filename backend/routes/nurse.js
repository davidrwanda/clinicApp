const express = require('express');

const router = express.Router();

const nurseController = require('../controllers/nurse');

router.get('/', nurseController.getNurseIndex);

router.get('/basicExams', nurseController.getBasicExams);
router.post('/basicExam', nurseController.postAddBasicExam);
router.put('/basicExam/:examId', nurseController.putEditBasicExam);
router.delete('/basicExam/:examId', nurseController.deleteBasicExam);

module.exports = router;