const express = require('express');

const router = express.Router();

const recepController = require('../controllers/reception');

router.get('/', recepController.getRecepIndex);
router.get('/patients', recepController.getPatients);
router.post('/patient', recepController.postAddPatient);
router.put('/patient/:patientId', recepController.putEditPatient);
router.delete('/patient/:patientId', recepController.deletePatient);


module.exports = router;