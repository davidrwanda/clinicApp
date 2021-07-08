const express = require('express');

const router = express.Router();

const pharController = require('../controllers/pharmacy');

router.get('/', pharController.getPharIndex);


module.exports = router;