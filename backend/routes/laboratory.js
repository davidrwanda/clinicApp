const express = require('express');

const router = express.Router();

const laboController = require('../controllers/laboratory');

router.get('/', laboController.getlaboIndex);


module.exports = router;