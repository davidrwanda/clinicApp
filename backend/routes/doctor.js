const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctor');

router.get('/', doctorController.getDoctorIndex);


module.exports = router;