const express = require('express');

const router = express.Router();

const financeController = require('../controllers/finance');

router.get('/', financeController.getFinanceIndex);


module.exports = router;