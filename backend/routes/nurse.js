const express = require('express');

const router = express.Router();

const nurseController = require('../controllers/nurse');

router.get('/', nurseController.getNurseIndex);


module.exports = router;