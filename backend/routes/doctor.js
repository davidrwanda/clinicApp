const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctor');

router.get('/', doctorController.getDoctorIndex);

router.get('/diseases', doctorController.getDiseases);
router.post('/disease', doctorController.postAddDisease);
router.put('/disease/:diseaseId', doctorController.putEditDisease);
router.delete('/disease/:diseaseId', doctorController.deleteDisease);

module.exports = router;