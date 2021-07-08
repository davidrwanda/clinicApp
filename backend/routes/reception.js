const express = require('express');

const router = express.Router();

const recepController = require('../controllers/reception');

router.get('/', recepController.getRecepIndex);


module.exports = router;